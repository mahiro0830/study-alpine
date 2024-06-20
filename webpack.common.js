const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const autoprefixer = require("autoprefixer");

module.exports = {
  entry: {
    app: "./src/js/app.js",
    // JavaScriptを増やす場合は以下に追加
    // another: './src/js/another.js',
  },

  output: {
    path: path.resolve(__dirname, "public"),
    filename: "assets/js/[name].bundle.js",
  },

  optimization: {
    splitChunks: {
      chunks: "initial",
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: "vendor",
        },
        vendorsModules: {
          test: /src[\\/]js[\\/]modules/,
          name: "vendor-modules",
          minSize: 0,
          minChunks: 2,
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              url: false,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [autoprefixer({ grid: true })],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sassOptions: {
                fiber: false,
              },
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/,
        use: {
          loader: "url-loader", // this need file-loader
          options: {
            limit: 50000,
          },
        },
      },
      {
        test: /\.ttf$/,
        generator: {
          filename: ({ filename, contentHash }) => {
            const filepath = path.parse(filename);
            return `assets/fonts/${filepath.name}${filepath.ext}`;
          },
        },
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.pug$/,
        use: "pug-loader",
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
        ],
      },
    ],
  },

  // 利用するプラグイン
  plugins: [
    new CleanWebpackPlugin(),

    // top
    new HtmlWebpackPlugin({filename: "index.html",template: "./src/html/index.pug",inject: "body",chunks: ["app"],}),
    new HtmlWebpackPlugin({filename: "test00.html",template: "./src/html/test00.pug",inject: "body",chunks: ["app"],}),
    new HtmlWebpackPlugin({filename: "test01.html",template: "./src/html/test01.pug",inject: "body",chunks: ["app"],}),
    new HtmlWebpackPlugin({filename: "test02.html",template: "./src/html/test02.pug",inject: "body",chunks: ["app"],}),
    new HtmlWebpackPlugin({filename: "test03.html",template: "./src/html/test03.pug",inject: "body",chunks: ["app"],}),
    new HtmlWebpackPlugin({filename: "test04.html",template: "./src/html/test04.pug",inject: "body",chunks: ["app"],}),
    new HtmlWebpackPlugin({filename: "test05.html",template: "./src/html/test05.pug",inject: "body",chunks: ["app"],}),
    new HtmlWebpackPlugin({filename: "test06.html",template: "./src/html/test06.pug",inject: "body",chunks: ["app"],}),
    new HtmlWebpackPlugin({filename: "test07.html",template: "./src/html/test07.pug",inject: "body",chunks: ["app"],}),
    new HtmlWebpackPlugin({filename: "test08.html",template: "./src/html/test08.pug",inject: "body",chunks: ["app"],}),
    new HtmlWebpackPlugin({filename: "test09.html",template: "./src/html/test09.pug",inject: "body",chunks: ["app"],}),
    new HtmlWebpackPlugin({filename: "test10.html",template: "./src/html/test10.pug",inject: "body",chunks: ["app"],}),
    new HtmlWebpackPlugin({filename: "test11.html",template: "./src/html/test11.pug",inject: "body",chunks: ["app"],}),
    new HtmlWebpackPlugin({filename: "test12.html",template: "./src/html/test12.pug",inject: "body",chunks: ["app"],}),
    new HtmlWebpackPlugin({filename: "test13.html",template: "./src/html/test13.pug",inject: "body",chunks: ["app"],}),
    new HtmlWebpackPlugin({filename: "test14.html",template: "./src/html/test14.pug",inject: "body",chunks: ["app"],}),

    new MiniCssExtractPlugin({
      filename: "./assets/css/app.css", // Sassのコンパル先
    }),

    new CopyPlugin({
      patterns: [
        {
          from: "src/images",
          to: "./assets/images",
        },
      ],
    }),
  ],
};
