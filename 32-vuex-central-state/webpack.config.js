var path = require('path')
var webpack = require('webpack')

// Ejemplo de separacion de: https://medium.com/dailyjs/webpack-4-splitchunks-plugin-d9fbbe091fd0
// Hash data: https://medium.com/@sahilkkrazy/hash-vs-chunkhash-vs-contenthash-e94d38a32208
// Separacion Otro: http://code.hootsuite.com/webpack-101/

var entry = {
    main: './src/main.js'
};

var output = {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: "[name].js"
};

if(process.env.NODE_ENV == 'production'){
    output.filename = "[name]-[hash].js";
}


// Webpack 4
/*var optimization = {
    splitChunks: {
    	cacheGroups: {
    		commons: {
    			test: /[\\/]node_modules[\\/]/,
    			name: "vendors",
    			chunks: "initial",
    			priority: 1
    		}
    	}
    }
};*/

module.exports = {
  entry: entry,
  output: output,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if(process.env.NODE_ENV == 'development'){
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    })
  ]);
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    })
  ])
}
