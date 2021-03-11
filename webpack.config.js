const path = require('path');
const webpack = require("webpack")
// const WebpackObfuscator = require('webpack-obfuscator');

module.exports = {
  entry: './frontend/public/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'frontend/public/js/'),
  },
  target: 'node',
  watch: true,
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    // new WebpackObfuscator ({
    //     rotateStringArray: true
    // },)
  ]
};