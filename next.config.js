const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/proxy/:path*',
        destination: 'https://cstmsustudents.vercel.app/api/:path*', // URL ต้นทางของ API ที่จะเรียกผ่าน proxy
      },
    ];
  },
});
