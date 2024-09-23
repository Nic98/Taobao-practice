const path = require('path');

module.exports = {
  entry: './src/index.js', // entry file
  output: {
    filename: 'bundle.js', // ouput file name
    path: path.resolve(__dirname, 'dist'), // output file path
  },
  module: {
    rules: [
      // configure rules below:

    ]
  }
};