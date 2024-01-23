const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: {
		index: "./src/js/index.js",
		submitted: "./src/js/submitted.js"
	},
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
			filename: "index.html",
			template: "./src/index.html",
			chunks: ["index"]
		}),
		new HtmlWebpackPlugin({
			filename: "submitted.html",
			template: "./src/submitted.html",
			chunks: ["submitted"]
		}),
	],
	module: {
		rules: [
			{
				test: /\.html$/,
				loader: "html-loader",
				options: {
					sources: {
					  list: [
						'...',
						// Enables loading of <a href=""></a> used for pdfs
						{
						  tag: 'a',
						  attribute: 'href',
						  type: 'src',
						  // Only load resources for a href tags where href is a pdf
						  filter: (tag, attribute, attributes, resourcePath) => {
							let result = false;
							for(const a of attributes) {
								if (a.name === "href" && /\.pdf$/.test(a.value)) {
									result = true;
									break;
								}
							}
							return result;
						}
						}
					  ],
					}
				  }
			},

			{
				test: /\.(pdf|svg|png|jpg|gif)$/,
				type: "asset/resource",
			}
		]
	}
};
