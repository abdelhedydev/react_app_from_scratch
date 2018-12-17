const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [htmlPlugin]
};
// module.exports = {
//   entry: {
//     app: './src/app.js'
//   },
//   output: {
//     path: path.resolve(__dirname, 'build'),
//     filename: 'app.bundle.js'
//   },
//   module: {
//     rules: [{
//       test: /\.js?$/,
//       exclude: '/node_modules/',
//       loader: 'babel-loader',
//       query: {
//         presets: ['env']
//       }
//     }]

//   }
// }