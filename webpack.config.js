

module.exports = {
    output: {
      publicPath: '../public/images/BannerImage.png',
      
    },
    node: {
        child_process: "empty"
    },
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: ['file-loader', 'babel-loader', 'webpack-conditional-loader'],
              options: {
                name: '[path][name].[ext][query]',
              },
            },
          ],
        },
      ],
    },
  };