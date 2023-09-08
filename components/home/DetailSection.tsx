import { useState } from 'react';
import useSWR from 'swr';
import { CURRENT_STORE_KEY } from '../../hooks/useCurrentStore';
import styles from '../../styles/detail.module.scss';
// import DetailHeader from './DetailHeader';
// import DetailContent from './DetailContent';
import { Store } from '@/types/srore';
import { IoIosArrowUp } from 'react-icons/io';

const DetailSection = () => {
  // const { data: currentStore } = useSWR<Store>(CURRENT_STORE_KEY);
  // const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.detailSection}>
      <div className={styles.header}>
        <button className={styles.arrowButton} disabled>
          <IoIosArrowUp size={20} color='#666666'/>
        </button>
        <p className={styles.title}>매장을 선택해주세요.</p>
      </div>
    </div>
    // <div
    //   className={`${styles.detailSection} ${expanded ? styles.expanded : ''} ${
    //     currentStore ? styles.selected : ''
    //   }`}
    // >
    //   <DetailHeader
    //     currentStore={currentStore}
    //     expanded={expanded}
    //     onClickArrow={() => setExpanded(!expanded)}
    //   />
    //   <DetailContent currentStore={currentStore} expanded={expanded} />
    // </div>
  );
};
export default DetailSection;
