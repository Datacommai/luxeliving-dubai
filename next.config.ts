/** @type {import('next').NextConfig} */
const nextConfig = {
 /** if you want to test build comment-out output, deploying to Firebase output is required  */
 output: 'export',
 distDir: 'build',
 trailingSlash: true,
 images: { unoptimized: true },
};

export default nextConfig;
