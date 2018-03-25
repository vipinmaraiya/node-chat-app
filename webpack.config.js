const path = require("path");
const webpack = require("webpack");

const config = {
    entry:"./webpack.entry.js",
    output:{
        path:path.resolve(__dirname, "public/js"),
        filename:"bundle.js"
    },
    module:{
        rules:[
            {
                use:"babel-loader",
                test:/\.js$/
            }
        ]
    },
    plugins:[
        new webpack.ProvidePlugin({
            $:"jquery",
            jquery:"jquery",
            jQuery:"jquery"
        })
    ]
}

module.exports = config;