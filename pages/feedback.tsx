import HeaderComponent from "@/components/common/Header";
import { Fragment } from "react";
import styles from "../styles/header.module.scss";
import Link from "next/link";
import {AiOutlineShareAlt} from 'react-icons/ai';
import {VscFeedback} from 'react-icons/vsc';

const Home = () => {
  return (
    <Fragment>
      <HeaderComponent />
      <main></main>
    </Fragment>
  );
};

export default Home;
