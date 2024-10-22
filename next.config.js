/** @type {import('next').NextConfig} */
// next.config.js
module.exports = {
  // output: 'export',
  swcMinify: true,
  images: {
    unoptimized: true,
    
  },
};
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  // อื่น ๆ ของการตั้งค่า
});
// next.config.mjs
// export default {
//     output: 'export',
//     images: {
//       unoptimized: true,
//     },
//   };