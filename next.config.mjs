/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.ttf$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "static/fonts/",
            publicPath: "_next/static/fonts/",
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
