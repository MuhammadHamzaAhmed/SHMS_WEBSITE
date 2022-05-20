/** @type {import('webpack').Configuration} */
const path = require('path');
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        name: "[name].[contenthash].js"
    },
    resolve:{
        fallback:{
            crypto: require.resolve("crypto-browserify")
        },
    }
};