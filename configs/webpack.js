const path = require('path');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {

    entry: {
        server: path.resolve("src/start.ts")

    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
    externals: [
        /^[a-z\-0-9]+$/ // Ignore node_modules folder
    ],

    output: {
        filename: 'server.js', // output file
        path: path.resolve("build/"),
        libraryTarget: "commonjs",
    },
    devtool: 'source-map',
    resolve: {
        // Add in `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.json'],
        alias: {
            '@server': path.resolve('./src/')
        }
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.ts?$/, loaders: ["awesome-typescript-loader"] },

        ]
    },

    plugins: [
        new CleanWebpackPlugin(['build']),
        // TODO: if necessery copy files to assets
        // new CopyWebpackPlugin(
        //     [
        //         {
        //             from: "src/middlewares/transformers/assets/",
        //             to: "assets/"
        //         }
        //     ]
        // )
    ],

    stats: "normal"
};
