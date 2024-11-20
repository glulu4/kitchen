/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['assetstools.cosentino.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imagedelivery.net",
      },
    ],
  },
  redirects: async () => {
    return [];
  },
};

export default nextConfig;
