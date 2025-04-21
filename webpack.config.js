const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].js", // Contenthash for cache busting
    path: path.resolve(__dirname, "dist"),
    publicPath: '', // Empty string for relative paths
    clean: true,
  },
  devtool: process.env.NODE_ENV === "production" ? "source-map" : "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
    hot: true,
    open: true,
    historyApiFallback: true, // For SPA routing
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      minify: process.env.NODE_ENV === "production" ? {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      } : false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: "asset/resource",
        generator: {
          filename: 'assets/images/[name].[hash][ext]'
        }
      },
    ],
  },
  optimization: {
    minimize: process.env.NODE_ENV === "production",
    splitChunks: {
      chunks: 'all',
    },
  },
  performance: {
    hints: process.env.NODE_ENV === "production" ? "warning" : false,
  },
};
