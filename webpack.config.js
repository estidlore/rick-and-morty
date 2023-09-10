const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const prod = process.env.NODE_ENV === "production";

function src(subdir) {
  return path.join(__dirname, "src", subdir);
}

module.exports = {
  devtool: prod ? undefined : "source-map",
  entry: "./src/index.tsx",
  mode: prod ? "production" : "development",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".ts", ".tsx"],
        },
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  output: {
    path: __dirname + "/dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  resolve: {
    alias: {
      assets: src("assets"),
      components: src("components"),
      types: src("types"),
      utils: src("utils"),
      views: src("views"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
};
