import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
// 전역 SEO 설정
import { DefaultSeo } from 'next-seo';
import SEO from '../seo.config'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* 전역 SEO설정 */}
      <DefaultSeo {...SEO}/>
      <Component {...pageProps} />
    </>
  )
}
