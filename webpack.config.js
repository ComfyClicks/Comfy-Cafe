const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const modeArgIndex = process.argv.indexOf('--mode');
const buildMode = modeArgIndex >= 0 ? process.argv[modeArgIndex + 1] : process.env.NODE_ENV;
const isProduction = buildMode === 'production';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    clean: true,
  },
  devtool: isProduction ? false : 'eval-source-map',
  devServer: {
    static: './dist',
    hot: true,
    open: true,
    historyApiFallback: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
      minify: isProduction ? {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      } : false,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    // Bundle analyzer - run with ANALYZE=true npm run build to see bundle composition
    ...(process.env.ANALYZE ? [new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: true,
      reportFilename: 'bundle-report.html'
    })] : []),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                useBuiltIns: 'usage',
                corejs: '3.25',
                targets: {
                  browsers: [
                    '> 1%',
                    'last 2 versions',
                    'not dead'
                  ]
                }
              }]
            ]
          }
        }
      },
      {
        test: /\.css$/i,
        use: [
          isProduction
            ? MiniCssExtractPlugin.loader
            : 'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    minimize: isProduction,
    minimizer: [
      '...',
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      chunks: 'all'
    }
  },
  performance: {
    // Adjust performance hints for a media-rich website
    // Development builds are naturally larger (no minification, includes source maps)
    maxAssetSize: isProduction ? 400000 : 1000000,
    maxEntrypointSize: isProduction ? 500000 : 1000000,
    hints: isProduction ? 'warning' : false, // Only show in production
  }
};
