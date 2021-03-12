const path = require('path');
const webpack = require("webpack")
// const WebpackObfuscator = require('webpack-obfuscator');

module.exports = {
  entry: './public/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/js/'),
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
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [['@babel/plugin-transform-react-jsx', { pragma: "Quick.createElement" }]]
          }
        }
      }
    ]
  }
};