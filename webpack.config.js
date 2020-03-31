const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
    hot: true,
  },
  devtool: "source-map",
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(tsx?)$/,
        use: "eslint-loader",
      },
      {
        exclude: /node_modules/,
        test: /\.(jsx?|tsx?)$/,
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
      {
        exclude: /node_modules/,
        test: /\.(jpe?g|png|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name]-[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    plugins: [new TsconfigPathsPlugin()],
  },
};
