// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const isProduction = process.env.NODE_ENV == "production";
const config = {
  entry: "./src/index.ts",
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, "dist"),
    library: {
      name: 'MuddeFormgen',
      type: 'umd'
    },
    filename: 'formgen.js',
    clean: true,
  },
  stats: {
    assets: true,
    colors: false,
    errors: true,
    errorDetails: true,
    hash: true,
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
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
