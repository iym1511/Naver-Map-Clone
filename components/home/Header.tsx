import { AiOutlineShareAlt } from "react-icons/ai";
import HeaderComponent from "../common/Header";
import { VscFeedback } from "react-icons/vsc";
import Link from "next/link";
import styles from "../../styles/header.module.scss";
import useMaps from "@/hooks/useMaps";
import { useRouter } from "next/router";
import { useCallback } from "react";
import copy from 'copy-to-clipboard'; // npm i copy-to-clipboard (text 복사 라이브러리)

const HomeHeader = () => {

  // resetMapOptions = HeaderCOmponent로 넘겨주어 로고 누르면 좌표 초기화 되도록 props해줌
  const { resetMapOptions,getMapOptions } = useMaps();

  const router = useRouter();

  // 주소 복사 공유 버튼
  // MapSeciont.tsx 에서 복사 시 새로고침하면 해당 경,위도가 초기값으로 변경되는 함수 구현
  const replaceAndCopyUrl = useCallback(() => {
    const mapOptions = getMapOptions(); // 현제 주소의 mapOptions 가져옴
    // query string 생성
    const query = `/?zoom=${mapOptions.zoom}&lat=${mapOptions.center[0]}&lng=${mapOptions.center[1]}`;

    // url query를 현제 url query로 대체함 (상단 주소창에 query 생김)
    router.replace(query);
    // 현재의 location.origin 과 query를 더해 url 복사
    // http://localhost:3000/?zoom=10&lat=37.5262411&lng=126.99289439
    copy(location.origin + query);
    
  },[router, getMapOptions])

  return (
    <div>
      <HeaderComponent
      onClickLogo={resetMapOptions}
        rightElements={[
          <button
            onClick={replaceAndCopyUrl}
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
    </div>
  );
};

export default HomeHeader;
