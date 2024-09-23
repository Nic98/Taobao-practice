const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js', // ouput file name
    path: path.resolve(__dirname, 'dist'),
  }
}