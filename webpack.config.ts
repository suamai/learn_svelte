import type webpack from "webpack";
import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import sveltePreprocess from "svelte-preprocess";
import TerserPlugin from "terser-webpack-plugin";

import "webpack-dev-server";

const mode = (process.env.NODE_ENV || "development") as
  | "production"
  | "development";
const prod = mode === "production";

const config: webpack.Configuration = {
  entry: {
    "build/bundle": ["./src/main.ts"],
  },
  resolve: {
    alias: {
      svelte: path.dirname(require.resolve("svelte/package.json")),
    },
    extensions: [".mjs", ".js", ".ts", ".svelte"],
    mainFields: ["svelte", "browser", "module", "main"],
  },
  output: {
    path: path.join(__dirname, "/public"),
    filename: "[name].js",
    chunkFilename: "[name].[id].js",
  },
  optimization: {
    minimize: prod,
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.svelte$/,
        use: {
          loader: "svelte-loader",
          options: {
            compilerOptions: {
              dev: !prod,
              immutable: true,
            },
            emitCss: prod,
            hotReload: !prod,
            preprocess: sveltePreprocess({ sourceMap: !prod }),
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        // required to prevent errors from Svelte on Webpack 5+
        test: /node_modules\/svelte\/.*\.mjs$/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  mode,
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  devtool: prod ? false : "source-map",
  devServer: {
    hot: true,
    port: 3000,
    client: { overlay: false },
    static: {
      publicPath: "/",
      directory: path.join(__dirname, "/public"),
    },
    historyApiFallback: {
      index: "/index.html",
    },
  },
};

export default config;
