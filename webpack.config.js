const webpack = require("webpack");
const { resolve, join } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: [
    "webpack-dev-server/client?http://localhost:8080",
    resolve(__dirname, "src") + "/index.jsx"
  ],

  output: {
    filename: "app.bundle.js",
    path: join(__dirname, "/build"),
    publicPath: "/"
  },

  resolve: {
    extensions: [".js", ".jsx"]
  },

  devtool: "eval",

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
          presets: [["env", { modules: false }], "react"],
          plugins: ["react-hot-loader/babel", "transform-class-properties"]
        }
      }
    ]
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: "template.ejs",
      appMountId: "react-app-root",
      title: "Dad Helper",
      filename: resolve(__dirname, "build", "index.html")
    })
  ]
};
