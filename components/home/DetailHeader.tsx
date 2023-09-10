import { Store } from '@/types/srore';
import styles from '../../styles/detail.module.scss';
import { IoIosArrowUp } from 'react-icons/io';

interface Props {
  currentStore? : Store;
  expanded: boolean;
  onClickArrow: () => void
}

const DetailHeader = ({ currentStore, expanded, onClickArrow }: Props) => {
  return (  
    <div className={styles.header}>
    <button 
      className={`${styles.arrowButton} ${expanded ? styles.expanded : ''}`} 
      onClick={onClickArrow}
      disabled={!currentStore} // currentStore가 없을때 버튼 비활성화
    >
      <IoIosArrowUp size={20} color='#666666'/>
    </button>
    {!currentStore && <p className={styles.title}>매장을 선택해주세요.</p>}
    {currentStore && <p className={styles.title}>{currentStore.name}</p>}
  </div>
  );
}
 
export default DetailHeader;