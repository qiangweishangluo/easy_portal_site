const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  // transpileDependencies: true,
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: "辰泰信德",
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
  },
  devServer: {
    open: true,
    proxy: {
      "/api": {
        target: "http://47.95.37.110:8000",
        ws: true,
        changeOrigin: true
      }
    }
  },
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       data: `@import "./src/styles/element-variables";`,
  //     },
  //   },
  // },
});
