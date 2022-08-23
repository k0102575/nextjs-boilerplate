/** @type {import('next').NextConfig} */

const { NODE_ENV } = process.env;
const prod = NODE_ENV === 'production';

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false,
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
  swcMinify: true,
  compiler: {
    removeConsole: prod
      ? {
          exclude: ['error'],
        }
      : false,
  },
};

module.exports = nextConfig;
