import { Fragment, useEffect } from "react";
import MapSection from "@/components/home/MapSection";
import { Store } from "@/types/srore";
import { NextPage } from "next";
import useStores from "@/hooks/useStores";
import Header from "@/components/home/Header";
import DetailSection from "@/components/home/DetailSection";
import Head from "next/head";
// npm i next-seo
import { NextSeo } from 'next-seo';

interface Props {
  stores: Store[]
}

const Home: NextPage<Props> = ({ stores }) => {

  const { initializeStores } = useStores();
  console.log(stores)

  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);


  return (
    <Fragment>
      {/* title은 각각의 페이지마다 next/nead를 Import하여 사용권장 */}
      {/* 하지만 코드중복때메 SEO와 관련된 meta tag 들을 관리하는 라이브러리 사용*/}
      {/* <Head>
        <title>Next.js 시작하기</title>
      </Head> */}
      <NextSeo 
        title="매장 지도"
        description="Next.js 시작하기 강의를 위한 매장 지도 서비스입니다."
      />
      <Header />
      <main style={{position:'relative', width:'100%', height:'100%', overflow: 'hideden'}}>
        <MapSection />
      </main>
      <DetailSection />
    </Fragment>
  );
}

export default Home

export const getStaticProps = async () => {
  // next.api routes 로 불러오기
  const stores = (await import('../public/stores.json')).default
  return {
    props : {stores},
    revalidate : 60*60,
  }
}

