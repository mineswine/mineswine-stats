var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../src/client/scripts/client.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /src\/.+.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['react','es2015', 'stage-2']
        }
      }
    ]
  }
};