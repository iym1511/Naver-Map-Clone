import { useState } from "react";
import useSWR from "swr";
import { CURRENT_STORE_KEY } from "../../hooks/useCurrentStore";
import styles from "../../styles/detail.module.scss";
// import DetailHeader from './DetailHeader';
// import DetailContent from './DetailContent';
import { Store } from "@/types/srore";
import DetailContent from "./DetailContent";
import DetailHeader from "./DetailHeader";

const DetailSection = () => {
  const { data: currentStore } = useSWR<Store>(CURRENT_STORE_KEY);
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`${styles.detailSection} ${expanded ? styles.expanded : ""} ${
        currentStore ? styles.selected : ""
      }`}
    >
      <DetailHeader
        currentStore={currentStore}
        expanded={expanded}
        onClickArrow={() => setExpanded((prev) => !prev)}
      />
      <DetailContent currentStore={currentStore} expanded={expanded} />
    </div>
  );
};
export default DetailSection;
