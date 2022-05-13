/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
};

module.exports = {
  images: {
    loader: "custom",
    imageSizes: [400, 640, 768, 1024, 1280, 1536, 1920, 2160, 3840],
    nextImageExportOptimizer: {
      imageFolderPath: "public/images",
      exportFolderPath: "out",
      quality: 100,
    },
  },
};
