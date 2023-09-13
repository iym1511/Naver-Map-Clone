import { Fragment, useEffect } from "react";
import MapSection from "@/components/home/MapSection";
import { Store } from "@/types/srore";
import { NextPage } from "next";
import useStores from "@/hooks/useStores";
import Header from "@/components/home/Header";
import DetailSection from "@/components/home/DetailSection";
// npm i next-seo
import { NextSeo } from 'next-seo';
import axios from "axios";

interface Props {
  stores: Store[]
}

const Home: NextPage<Props> = ({ stores }) => {

  // pages > api > stores.ts 에서 설정해준 값 가져옴
  // useEffect(()=> {
  //     const response = axios.get('/api/stores').then((res) => {
  //       console.log(res.data)
  //     })
  // },[])

  const { initializeStores } = useStores();
  console.log(stores)

  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);

  // const fetcher = async () => {
  //   const response = await axios.get('../public/stores.json');
  //     return response.data;
  // }
  // console.log(fetcher())
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
  // api url을 환경변수로 분리
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/stores`);
  const stores = response.data;
  return {
    props : {stores},
    revalidate : 60*60,
  }
}

