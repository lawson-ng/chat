const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:slug*",
        destination: `http://localhost:3002/api/:slug*`,
      },
    ];
  },
};

module.exports = nextConfig;
