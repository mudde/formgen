// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: "./src/index.ts",
  devtool: 'source-map',
  // devtool: false,
  output: {
    path: path.resolve(__dirname, "dist"),
    library: {
      name: 'MuddeFormgen',
      type: 'umd'
    },
    filename: 'formgen.js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
  resolve: {
    extensions: [ ".ts"],
  },
};

module.exports = () => {
  config.mode =  "development";
  return config;
};
