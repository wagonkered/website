const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
	mode: "production",
	output: {
		filename: "[name].[contenthash].js",
		path: path.resolve(__dirname, "dist"),	
		assetModuleFilename: "assets/[name].[hash][ext]"
	},
	module: {
		rules: [
			{
				test: /.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
		],
	},
	optimization: {
		minimizer: [
			new CssMinimizerPlugin(),
			new TerserPlugin(),
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin(),
	],
});
