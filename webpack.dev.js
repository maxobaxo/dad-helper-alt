const webpack = require("webpack");
const merge = require("webpack-merge");
const { resolve } = require("path");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",

  devtool: "eval",

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, "build"),
    publicPath: "/",
    port: 8080
  },

  plugins: [new webpack.NamedModulesPlugin()]
});
