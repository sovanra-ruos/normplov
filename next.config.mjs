/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
      locales: ['en', 'km'],
      defaultLocale: 'km',
      localeDetection: false,
  },
  images: {
    domains: ['normplov-api.shinoshike.studio'], // Add the external domain for images
  },
};

export default nextConfig;
