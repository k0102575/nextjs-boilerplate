/** @type {import('next').NextConfig} */

const prod = APP_ENV === 'production';

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
