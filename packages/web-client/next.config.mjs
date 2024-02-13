/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: {
    test: /\.less$/i,
    use: [
      // compiles Less to CSS
      "style-loader",
      "css-loader",
      "less-loader",
    ],
  }
};

export default nextConfig;
