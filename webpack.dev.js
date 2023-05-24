const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		static: "./dist",
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					"style-loader",
					"css-loader",
				]
			}
		]
	}
};
