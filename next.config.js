/** @type {import('next').NextConfig} */
const nextConfig = {
  // console 두번찍히는 이유 
  reactStrictMode: true,
  images: {
    domains: ['inflearn-nextjs.vercel.app', 'search.pstatic.net'], // 이미지 호스트를 여기에 추가
  },
  // 영어 번역까지 지원해야하는 사이트일때 여기서 언어 설정
  i18n: {
    locales: ['ko'],
    defaultLocale: 'ko',
  }
}

module.exports = nextConfig
