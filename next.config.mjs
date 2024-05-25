/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: process.env.NODE_ENV === "production" ? "/portfolio-fm-2024" : "",
};

export default nextConfig;
