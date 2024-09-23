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
      {
        test: /.(ts|tsx)$/, // 匹配.ts, tsx文件
        use: {
          loader: 'babel-loader',
          options: {
            // 预设执行顺序由右往左,所以先处理ts,再处理jsx
            presets: [
              '@babel/preset-react',
              '@babel/preset-typescript'
            ]
          }
        }

作者：Ausra无忧
链接：https://juejin.cn/post/7111922283681153038
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
    ]
  }
};