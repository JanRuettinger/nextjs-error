/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

// module.exports = (nextConfig) => {
//     return {
//       ...nextConfig,
//       compress: false,
//       webpack(webpackConfig) {
//         return {
//           ...webpackConfig,
//           optimization: {
//             minimize: false
//           }
//         };
//       }
//     };
//   }