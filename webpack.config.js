const path = require("path");

const environment = process.env.ISPROD || "development";

const config = {
    mode: environment,
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
    }
}

module.exports = config;