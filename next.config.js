/** @type {import('next').NextConfig} */

const prod = APP_ENV === 'production';

const nextConfig = {
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
