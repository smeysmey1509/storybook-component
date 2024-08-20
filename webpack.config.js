const path = require("path");

module.exports = {
  entry: "./stories/Button.js",
  output: {
    filename: "Button.js",
    path: path.resolve(__dirname, "dist"),
    library: "ButtonComponent",
    libraryTarget: "umd",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  mode: "production",
  devtool: "source-map",
};
