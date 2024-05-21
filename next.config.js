const localization = require("./utils/localization");

/** @type {import('next').NextConfig} */
const nextConfig = {
	i18n: {
		locales: localization.locales,
		defaultLocale: localization.defaultLocale,
		localeDetection: false,
	},
	trailingSlash: false,
	images: {
		domains: ["downloads.ctfassets.net", "res.cloudinary.com", "images.ctfassets.net"],
	},
	sassOptions: {
		additionalData: "@import 'styles/shared.scss';",
	},
	async rewrites() {
    return [
      {
        source: "/storybook/:path*",
        destination: "/_next/storybook/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
