import HeaderComponent from "@/components/common/Header";
import styles from "../styles/header.module.scss";
import Link from "next/link";
import { Fragment } from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
import { VscFeedback } from "react-icons/vsc";
import MapSection from "@/components/home/MapSection";

export default function Home() {
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
