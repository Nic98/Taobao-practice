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
      // 预设执行顺序由右往左,所以先处理ts,再处理jsx
      presets: [
            '@babel/preset-react',
            '@babel/preset-typescript'
          ]

    ]
  }
};