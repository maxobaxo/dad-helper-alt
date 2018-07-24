const webpack = require("webpack");
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: [
    "react-hot-loader",
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server",
    resolve(__dirname, "src") + "/index.jsx"
  ],

  output: {
    filename: "app.bundle.js",
    path: resolve(__dirname, "build"),
    publicPath: "/"
  },

  resolve: {
    extensions: [".js", ".jsx"]
  },

  devtool: "#source-maps",

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, "build"),
    publicPath: "/"
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        loader: "style-loader"
      },
      {
        test: /\.css$/,
        loader: "css-loader",
        options: {
          modules: true,
          localIdentName: "[name]__[local]___[hash:base64:5]"
        }
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [["es2015", { modules: false }], "react"],
          plugins: ["react-hot-loader/babel", "transform-class-properties"]
        }
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: "template.ejs",
      appMountId: "react-app-root",
      title: "Dad Helper",
      filename: resolve(__dirname, "build", "index.html")
    })
  ]
};
