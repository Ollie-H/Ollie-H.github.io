const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const NODE_PATH = process.env.NODE_PATH || __dirname;

module.exports = {
  context: path.resolve(__dirname, "./src"),
  entry: {
    app: "./index.js"
  },
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "[name].bundle.js",
    publicPath: "."
  },
  resolve: {
    modules: ["node_modules", path.resolve(NODE_PATH)],
    extensions: [".js", ".jsx", ".css"]
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["sass-loader", "css-loader"]
        })
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("main.css"),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html")
    })
  ]
};
