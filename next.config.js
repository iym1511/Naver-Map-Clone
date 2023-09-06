/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['inflearn-nextjs.vercel.app'], // 이미지 호스트를 여기에 추가
  },
}

module.exports = nextConfig
