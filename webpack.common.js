const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: "./src/js/index.js",
	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "src", "img", "wagonkered-logo-with-background.png"),
					to: path.resolve(__dirname, "dist", "assets"),
				},
			],
		}),
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
	],
	module: {
		rules: [
			{
				test: /\.html$/,
				use: ["html-loader"]
			},
			{
				test: /\.(pdf|svg|png|jpg|gif)$/,
				type: "asset/resource",
			}
		]
	}

};
