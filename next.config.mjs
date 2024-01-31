/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "images.pexels.com",
				protocol: "https",
			},
			{
				hostname: "images.hdqwalls.com",
				protocol: "https",
			},
			{
				hostname: "wallpapercave.com",
				protocol: "https",
			},
		],
	},
};

export default nextConfig;
