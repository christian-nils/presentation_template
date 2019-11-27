// vue.config.js
module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/presentation_template/" : "/",
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule
      .use("vue-svg-loader")
      .loader("vue-svg-loader")
      .options({
        svgo: {
          plugins: [{ cleanupIDs: false }, { removeUnknownsAndDefaults: false }]
        }
      });

    config.module
      .rule("vue")
      .use("vue-loader")
      .tap(args => {
        args.compilerOptions.whitespace = "preserve";
      });
  }
};
