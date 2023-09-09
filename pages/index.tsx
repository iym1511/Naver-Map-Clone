import { Fragment, useEffect } from "react";
import MapSection from "@/components/home/MapSection";
import { Store } from "@/types/srore";
import { NextPage } from "next";
import useStores from "@/hooks/useStores";
import Header from "@/components/home/Header";
import DetailSection from "@/components/home/DetailSection";

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

