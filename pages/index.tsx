import HeaderComponent from "@/components/common/Header";
import styles from "../styles/header.module.scss";
import Link from "next/link";
import { Fragment, useEffect } from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
import { VscFeedback } from "react-icons/vsc";
import MapSection from "@/components/home/MapSection";
import { Store } from "@/types/srore";
import { NextPage } from "next";
import useStores from "@/hooks/useStores";

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
      <HeaderComponent
        rightElements={[
          <button
            onClick={() => alert("복사")}
            className={styles.box2}
            style={{ marginRight: 8 }}
            key="button"
          >
            <AiOutlineShareAlt size={20} /> 
          </button>,
          <Link href="/feedback" className={styles.box2} key="link">
            <VscFeedback size={20} />
          </Link>,
        ]}
      />
      <main style={{width:'100%', height:'100%'}}>
        <MapSection />
      </main>
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

