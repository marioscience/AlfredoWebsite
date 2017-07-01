var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: ["./app/index.module"],
    output: {
        path: path.join(__dirname, "../public/js"),
        filename: "bundle.js"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};