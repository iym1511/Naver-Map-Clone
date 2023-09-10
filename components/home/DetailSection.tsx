import { useState } from 'react';
import useSWR from 'swr';
import { CURRENT_STORE_KEY } from '../../hooks/useCurrentStore';
import styles from '../../styles/detail.module.scss';
// import DetailHeader from './DetailHeader';
// import DetailContent from './DetailContent';
import { Store } from '@/types/srore';
import { IoIosArrowUp } from 'react-icons/io';
import DetailContent from './DetailContent';

const DetailSection = () => {
  
  const { data: currentStore } = useSWR<Store>(CURRENT_STORE_KEY);
  const [expanded, setExpanded] = useState(false);

  return (
    <div 
      className={`${styles.detailSection} ${expanded ? styles.expanded : ''} ${
        currentStore ? styles.selected : ''
      }`}
    >
      <div className={styles.header}>
        <button 
          className={`${styles.arrowButton} ${expanded ? styles.expanded : ''}`} 
          onClick={() => setExpanded((prev) => !prev)}
          disabled={!currentStore} // currentStore가 없을때 버튼 비활성화
        >
          <IoIosArrowUp size={20} color='#666666'/>
        </button>
        {!currentStore && <p className={styles.title}>매장을 선택해주세요.</p>}
        {currentStore && <p className={styles.title}>{currentStore.name}</p>}
      </div>
      <DetailContent currentStore={currentStore} expanded={expanded}/>
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
