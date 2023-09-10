import { Store } from "@/types/srore";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/detail.module.scss";
import DetailHeader from "@/components/home/DetailHeader";
import DetailContent from "@/components/home/DetailContent";

interface Props {
  store: Store;
}

const StoreDetail: NextPage<Props> = ({ store }) => {
  const expanded = true; 

  // facllback 이 false 면 자동으로 404를 보여줘서 필요없는 로직
  // const router = useRouter();
  // if(router.isFallback) {
  //   return <div>Loading...</div>
  // }

  return (
    <div
      className={`${styles.detailSection} ${styles.expanded} ${styles.selected}`}
    >
      <DetailHeader
        currentStore={store}
        expanded={expanded}
        onClickArrow={() => null}
      />
      <DetailContent currentStore={store} expanded={expanded} />
    </div>
  );
};

export default StoreDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const stores = (await import("../public/stores.json")).default;
  const paths = stores.map((store) => ({ params: { name: store.name } })); // 모든 식당 경로 생성
  // fallback: 'blocking'을 사용했을때 존재하지 않는 경로에 접근하면 바로 404 페이지가 보이지않고
  // getStaticProps를 호출한다. >> store가 false일 시 404page출력
  // blocking 추가설명 : getStaticProps 함수가 return 될 때 까지 UI 가만히 blocking
  // 매장 위에 새로운 매장이 추가될 일이 없으므로 false
  return { paths, fallback: false }; // true 면 Loading... 이 보여진 후 404 page
};

// 첫 사용자가 접근했을 때만 호출되고 두 번째 부터는 프리 렌더링된 페이지로 빠르게 접근할 수 있습니다.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const stores = (await import("../public/stores.json")).default;
  // store전체 배열에서 params와 이름이 같은 스토어를 찾아서 props으로 전달
  const store = stores.find((store) => store.name === params?.name);

  // facllback 이 false 면 자동으로 404를 보여줘서 필요없는 로직
  // if(!store){
  //   return {
  //     notFound: true // 404 page
  //   }
  // }

  return { props: { store } };
};
