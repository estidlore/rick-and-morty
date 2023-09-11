const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

function src(subdir) {
  return path.join(__dirname, "src", subdir);
}

module.exports = (env) => {
  const ENV = env.ENV ?? "development";

  return {
    devtool: ENV === "production" ? undefined : "source-map",
    entry: "./src/index.tsx",
    mode: ENV,
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.prod.json",
            },
          },
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
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          extractComments: false,
          parallel: true,
        }),
      ],
      runtimeChunk: "single",
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: "all",
            name: "vendors",
            test: /[\\/]node_modules[\\/]/,
          },
        },
      },
    },
    output: {
      filename: "[name].[contenthash].js",
      path: __dirname + "/dist",
    },
    performance: {
      maxAssetSize: 244000,
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
};
