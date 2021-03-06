const path = require("path");
const webpack = require("webpack");

module.exports = {
  cache: true,
  entry: {
    index: "./src/webapp/app.js"
    //"admin": './src/webapp/admin.js',
  },
  output: {
    path: path.resolve(__dirname, "www"),
    filename: "[name].bundle.js",
    chunkFilename: "[name].[chunkhash:4].js"
  },
  resolve: {
    modules: [path.resolve(__dirname, "src/webapp"), "node_modules"],
    alias: {
      "@": path.resolve(__dirname, "src/webapp")
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: path.resolve(__dirname, "src")
      }
    ]
  },
  stats: {
    colors: true
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require("./www/vendor/manifest-vendor-dll.json")
    })
  ]
};
