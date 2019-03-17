const withCSS = require('@zeit/next-css');

const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx?$/
})

const config = {
	pageExtensions: ['js', 'jsx', 'mdx'],
	target: "serverless"
}

module.exports = withCSS(withMDX(config))
