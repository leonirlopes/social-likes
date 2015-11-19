var path = require('path');
var version = require('../package.json').version;

module.exports = {
	_banner: 'Social Likes v' + version + ' by Artem Sapegin - https://github.com/sapegin/social-likes - MIT License',
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel'],
				include: path.resolve('src'),
			}
		]
	},
	entry: [
		'./src/index.js'
	],
	output: {
		path: path.resolve('lib'),
		library: 'SocialLikes',
		libraryTarget: 'umd'
	},
	resolve: {
		extensions: ['', '.js']
	}
};