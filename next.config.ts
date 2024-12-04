/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.nostr.build",
      },
      {
        protocol: "https",
        hostname: "image.nostr.build",
      },
    ],
  },
};

module.exports = nextConfig;
