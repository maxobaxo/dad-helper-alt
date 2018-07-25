const webpack = require("webpack");
const { resolve, join } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: [resolve(__dirname, "src") + "/index.jsx"],

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
    publicPath: "/",
    port: 8080
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [["env", { modules: false }], "react"],
          plugins: ["react-hot-loader/babel", "transform-class-properties"]
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: "[name]--[local]--[hash:base64:8]"
            }
          }
        ]
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
