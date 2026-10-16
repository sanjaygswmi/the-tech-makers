/** @type {import('next').NextConfig} */
const nextConfig = {
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [
					{ key: 'X-Content-Type-Options', value: 'nosniff' },
					{ key: 'X-Frame-Options', value: 'SAMEORIGIN' },
					{ key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
					{ key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
				],
			},
		]
	},
	async redirects() {
		return [
			{ source: '/industries/revolutionizing-healthcare-through-innovative-solutions', destination: '/industries/healthcare-solutions', permanent: true },
			{ source: '/industries/empowering-education-and-impactful-philanthropy', destination: '/industries/education', permanent: true },
			{ source: '/industries/strategic-marketing-advertising-solutions', destination: '/industries/advertising-industry', permanent: true },
			{ source: '/industries/elevating-media-entertainment-xperiences', destination: '/industries/media-entertainment', permanent: true },
			{ source: '/industries/cloud_solutions_excellence', destination: '/industries/cloud-solutions', permanent: true },
			{ source: '/services/consulting-assurance', destination: '/services/technology-consulting', permanent: true },
			{ source: '/products/id', destination: '/products/school-college-erp', permanent: true },
		]
	},
	reactStrictMode: true,
	images: {
		domains: ['localhost', "thetechmakers.com", "www.thetechmakers.com"],
		qualities: [75, 100],
		unoptimized: true,
	},
	transpilePackages: ['mui-file-input'],
}

module.exports = nextConfig
