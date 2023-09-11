import HeaderComponent from "@/components/common/Header";
import { Fragment } from "react";
import { NextSeo } from "next-seo";

const Home = () => {
  return (
    <Fragment>
      <NextSeo 
        title="피드백"
        description="매장 지도 서비스에 대한 피드백을 받습니다."
      />
      <HeaderComponent />
      <main></main>
    </Fragment>
  );
};

export default Home;
