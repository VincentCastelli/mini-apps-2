const path = require( 'path' );
const serve = require( 'webpack-serve' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

module.exports = {
  entry: { main: './src/client/App.jsx' },
  resolve: {
    extensions: [ '.js', '.jsx' ],
  },
  output: {
    path: path.resolve( __dirname, 'public/dist' ),
    filename: '/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [ 'babel-loader', 'eslint-loader' ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader' ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin( {
      filename: './public/style.css',
    } ),
  ],
};
