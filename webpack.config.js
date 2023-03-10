const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
        publicPath: ''
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
    compress: true, // это ускорит загрузку в режиме разработки
    port: 8081, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт

    open: true // сайт будет открываться сам при запуске npm run dev
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: '/node_modules/'
    },
    // добавили правило для обработки файлов
    {
      // регулярное выражение, которое ищет все файлы с такими расширениями
      test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf|webp)$/,
      type: 'asset/resource'
    },
    {
      // применять это правило только к CSS-файлам
      test: /\.css$/,
      // при обработке этих файлов нужно использовать
      // MiniCssExtractPlugin.loader и css-loader
      use: [MiniCssExtractPlugin.loader, {
        loader: 'css-loader',
        options: { importLoaders: 1 }
      },
        // Добавьте postcss-loader
      'postcss-loader']
    },
  ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        favicon: 'src/images/logo/logo.ico'
      }),
      new HtmlWebpackPlugin({
        filename: 'tverskoy.html',
        template: 'src/tverskoy.html',
        favicon: 'src/images/logo/logo.ico'
      }),
      new HtmlWebpackPlugin({
        filename: 'skvorcova.html',
        template: 'src/skvorcova.html',
        favicon: 'src/images/logo/logo.ico'
      }),
      new HtmlWebpackPlugin({
        filename: 'privacy_tverskoy.html',
        template: 'src/privacy_tverskoy.html',
        favicon: 'src/images/logo/logo.ico'
      }),
      new HtmlWebpackPlugin({
        filename: 'history_tverskoy.html',
        template: 'src/history_tverskoy.html',
        favicon: 'src/images/logo/logo.ico'
      }),
      new HtmlWebpackPlugin({
        filename: 'privacy_skvorcova.html',
        template: 'src/privacy_skvorcova.html',
        favicon: 'src/images/logo/logo.ico'
      }),
      new HtmlWebpackPlugin({
        filename: 'history_skvorcova.html',
        template: 'src/history_skvorcova.html',
        favicon: 'src/images/logo/logo.ico'
      }),
      new MiniCssExtractPlugin(), // подключение плагина для объединения файлов
      new CopyWebpackPlugin({
        patterns: [
            {
              from: __dirname + '/inputmask.es6.js', // откуда
              to: __dirname + '/dist' // куда
          },
          {
            from: __dirname + '/inputmask.js', // откуда
            to: __dirname + '/dist' // куда
        },
        {
          from: __dirname + '/.htaccess', // откуда
          to: __dirname + '/dist' // куда
      }
        ]
    }),
      new CleanWebpackPlugin(),
    ] 
  }; 