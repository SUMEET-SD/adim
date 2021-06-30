// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
	siteName: "Adim Matrimony",
	siteUrl: "https://sumeet-sd.github.io",
	pathPrefix: "/adim",
	plugins: [
		{
			use: "gridsome-plugin-tailwindcss",
		},
		{
			use: "@gridsome/source-strapi",
			options: {
				apiURL: "http://localhost:1337",
				queryLimit: 1000, // Defaults to 100
				// contentTypes: ["data"],
				// singleTypes: ["impressum"],
				plural: true, // pluralizes names of Content Types in API
				// Possibility to login with a Strapi user,
				// when content types are not publicly available (optional).
				loginData: {
					identifier: "",
					password: "",
				},
			},
		},
	],
};
