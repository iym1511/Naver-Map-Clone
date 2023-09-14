import HeaderComponent from "@/components/common/Header";
import { Fragment } from "react";
import { NextSeo } from "next-seo";
import { GetServerSideProps, NextPage } from "next";
import { getFeedbackListFromFirestore } from "@/components/firebase/feedback";
import FeedbackSection from "@/components/feedback/FeedbackSection";
import { Feedback } from "@/types/feedback";

interface Props {
  initialFeedbackList: Feedback[];
}
const Home:NextPage<Props> = ({ initialFeedbackList }) => {
  return (
    <Fragment>
      <NextSeo 
        title="피드백"
        description="매장 지도 서비스에 대한 피드백을 받습니다."
      />
      <HeaderComponent />
      <main></main>
      <FeedbackSection initialFeedbackList={initialFeedbackList} />
    </Fragment>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      initialFeedbackList: await getFeedbackListFromFirestore(),
    },
  };
};