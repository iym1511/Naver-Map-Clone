import { Html, Head, Main, NextScript } from 'next/document'

// _document는 사용자가 직접 HTML head와 body tag에 관해 
// 전역적으로 수정을 가하고 싶을 때 필요한 페이지입니다.
export default function Document() {
  return (
    // 한국어만 지원하기 때문에 en => ko 변경
    <Html lang="ko">
      <Head >
        {/* 사이트 상단 제목 표시 */}
        {/* <title>Next.js 시작하기</title> */}
        <meta name='description' content="Next.js 시작하기 설명" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
