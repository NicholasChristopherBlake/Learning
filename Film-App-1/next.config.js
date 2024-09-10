const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const withPlugins = require('next-compose-plugins');
require('dotenv').config();

const nextConfig = {
	experimental: {
		images: {
			unoptimized: true,
		},
	},
	images: {
		domains: ['st.kp.yandex.net', 'avatars.mds.yandex.net', 'www.themoviedb.org'],
	},
	env: {
		API_KEY: "81X1GTK-P4RMY30-GR0VX98-C8VM409",
		API_URL: "https://api.kinopoisk.dev/v1",
	},
};

module.exports = withPlugins(
	[
		[
			withPWA,
			{
				pwa: {
					dest: 'public',
					disable: process.env.NODE_ENV === 'development',
					runtimeCaching,
				},
			},
		],
	],
	nextConfig
);
