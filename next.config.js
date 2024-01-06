/** @type {import('next').NextConfig} */

const nextConfig = {
    output: "export",
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    basePath: "/indiscon-2024",
    assetPrefix: "https://mayankguptapec.github.io/indiscon-2024",
};

module.exports = nextConfig;
