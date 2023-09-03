const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
var path = require('path');

module.exports = {
   entry: {
      app: './src/index.js'
   },
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js'
   },
   mode:'development',
   module: {
      rules: [
         {
            test:/\.(js)$/,
            include: path.resolve(__dirname, 'src'),
            loader: 'babel-loader',
            options: {
               presets: ['@babel/preset-env']
            }
         }
      ]
   },
   plugins: [
      new HtmlWebPackPlugin({
         template: path.resolve( __dirname, 'public/index.html' ),
         filename: 'index.html'
      })
            ]
};
