import { useCallback } from 'react';
import { Store } from '../types/srore';
import { mutate } from 'swr';

export const STORE_KEY = '/stores';

const useStores = () => {
  const initializeStores = useCallback((stores: Store[]) => {
    mutate(STORE_KEY, stores); // '/stores' 라는 주소 안에 json 데이터가 들어감
    // console.log(mutate(STORE_KEY, stores))
  }, []);
  return {
    initializeStores,
  };
};
export default useStores;
