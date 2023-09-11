// og:type, og:sitename 등 openGraph와 관련된 meta tag들은 openGraph라는 키 안에 작성

// 페이지 전역적으로 공통의 문자열이 들어가야 될 떄 titleTemplate 사용
export default {
  // %s : index.tsx NextSeo 에서 작성한 title이 들어감
  titleTemplate: '%s - Next.js 시작하기',
  openGraph: {
    type: 'website',
    site_name: 'Next.js 시작하기',
    images: [
      { url:'https://nextjs.org/static/blog/next-13/twitter-card.png' },
    ],
  },
  // 추가로 필요한 link tag에 대한 정보를 나열
  additionalLinkTags: [
    {
      rel: 'shortcut icon',
      href: '/favicon.ico',
    }
],
}