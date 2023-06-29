const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  outputDir: "my-jssdk",
  publicPath: ".",
  transpileDependencies: true,
});
