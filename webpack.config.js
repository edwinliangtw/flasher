const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
  devtool: "source-map",
  mode: "none",
  entry: "./src/Main.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        include: [path.resolve(__dirname, "src")],
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    publicPath: "public",
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: 4,
      }),
    ],
  },
};
