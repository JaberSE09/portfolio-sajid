/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: '/prompt_tn',
  // assetPrefix: '/prompt_tn',
  images: {
    unoptimized: true,
    
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    });
    return config;
  }
}

module.exports = nextConfig
