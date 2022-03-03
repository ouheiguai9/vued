const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const empty = "";
const slash = "/";
const backSlashes = /\\/g;
const paramsRegex = /:([a-z]+)/gi;
const assetEmptyPrefix = /^\.\//;
const nodeModulesDirName = "node_modules";
const nodeModulesRegex = /[\\/]node_modules[\\/].+?[\\/](.*)/;
const packageJson = "package.json";
const pluginName = "ExtractLibraryPlugin";

class ExtractLibraryPlugin {
  constructor({
    modules,
    prod = false,
    libraryPath = "/library",
    pathToNodeModules = process.cwd(),
  }) {
    this.modules = Array.isArray(modules) ? modules : [];
    this.prod = prod !== false;
    this.prefix = this.prod ? libraryPath.trim() : nodeModulesDirName;
    this.pathToNodeModules = pathToNodeModules;
    this.url = this.prod ? ":name@:version/:path" : ":name/:path";
  }

  apply(compiler) {
    if (this.prefix === empty || !this.prefix.startsWith(slash)) {
      this.prefix = slash + this.prefix;
    }
    this.prefix = ".." + this.prefix;
    if (!this.prefix.endsWith(slash)) {
      this.prefix += slash;
    }

    const getArgs = [this.url, this.prefix, this.prod];

    compiler.hooks.compilation.tap(pluginName, (compilation) => {
      ExtractLibraryPlugin._getHtmlHook(
        compilation,
        "beforeAssetTagGeneration",
        "htmlWebpackPluginBeforeHtmlGeneration"
      ).tapAsync(pluginName, (data, callback) => {
        if (this.modules) {
          ExtractLibraryPlugin._cleanModules(
            this.modules,
            this.pathToNodeModules
          );
          this.modules = this.modules.filter((module) => module.version);

          data.assets.js = ExtractLibraryPlugin._getJs(
            this.modules,
            ...getArgs
          ).concat(data.assets.js);
          data.assets.css = ExtractLibraryPlugin._getCss(
            this.modules,
            ...getArgs
          ).concat(data.assets.css);

          if (this.prefix === empty) {
            ExtractLibraryPlugin._assetNormalize(data.assets.js);
            ExtractLibraryPlugin._assetNormalize(data.assets.css);
          }
        }
        callback(null, data);
      });
    });

    const externals = compiler.options.externals || {};
    this.modules.forEach((p) => {
      externals[p.name] = p.var || p.name;
    });
    compiler.options.externals = externals;
  }

  /**
   * Returns the list of CSS files for all modules
   * It is the concatenation of "localStyle" and all "styles"
   */
  static _getCss(modules, url, prefix, prod) {
    return ExtractLibraryPlugin._get(modules, url, prefix, prod, "styles");
  }

  static _getJs(modules, url, prefix, prod) {
    return ExtractLibraryPlugin._get(modules, url, prefix, prod, "paths");
  }

  static _get(modules, url, prefix, prod, pathsKey) {
    prefix = prefix || empty;
    const files = [];
    modules
      .filter((p) => p[pathsKey].length > 0)
      .forEach((p) => {
        p[pathsKey].forEach((s) =>
          files.push(
            prefix +
              url.replace(paramsRegex, (m, p1) => {
                return p1 === "path" ? s : p[p1];
              })
          )
        );
      });

    return files;
  }

  static _assetNormalize(assets) {
    assets.forEach((item, i) => {
      assets[i] = assets[i].replace(assetEmptyPrefix, empty);
    });
  }

  /**
   * Returns the version of a package in the root of the `node_modules` folder.
   *
   * If `pathToNodeModules` param is not provided, the current working directory is used instead.
   * Note that the path should not end with `node_modules`.
   *
   * @param {string} name name of the package whose version to get.
   * @param {string} [pathToNodeModules=process.cwd()]
   */
  static getVersionInNodeModules(name, pathToNodeModules = process.cwd()) {
    try {
      return require(path.join(
        pathToNodeModules,
        nodeModulesDirName,
        name,
        packageJson
      )).version;
    } catch (e) {
      /* istanbul ignore next */
      return null;
    }
  }

  /**
   * - populate the "version" property of each module
   * - construct the "paths" and "styles" arrays
   * - add a default path if none provided
   *
   * If `pathToNodeModules` param is not provided, the current working directory is used instead.
   * Note that the path should not end with `node_modules`.
   *
   * @param {Array<Object>} modules the modules to clean
   * @param {string} [pathToNodeModules]
   * @private
   */
  static _cleanModules(modules, pathToNodeModules) {
    modules.forEach((p) => {
      p.version = ExtractLibraryPlugin.getVersionInNodeModules(
        p.name,
        pathToNodeModules
      );

      if (!p.paths) {
        p.paths = [];
      }
      if (p.path) {
        p.paths.unshift(p.path);
        p.path = undefined;
      }
      if (p.paths.length === 0 && !p.cssOnly) {
        p.paths.push(
          require
            .resolve(p.name)
            .match(nodeModulesRegex)[1]
            .replace(backSlashes, slash)
        );
      }

      if (!p.styles) {
        p.styles = [];
      }
      if (p.style) {
        p.styles.unshift(p.style);
        p.style = undefined;
      }
    });
  }

  static _getHtmlHook(compilation, v4Name, v3Name) {
    try {
      /* istanbul ignore next */
      return (
        HtmlWebpackPlugin.getHooks(compilation)[v4Name] ||
        compilation.hooks[v3Name]
      );
    } catch (e) {
      /* istanbul ignore next */
      return compilation.hooks[v3Name];
    }
  }
}

module.exports = ExtractLibraryPlugin;
