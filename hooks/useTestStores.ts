import { useCallback } from 'react';
import { Store } from '../types/srore';
import { mutate } from 'swr';
import { Data } from '@/pages/api/testStores';

export const STORE_KEY = '/stores';

const useTestStores = () => {
  const initializeStores = useCallback((testStores: Data[]) => {
    mutate(STORE_KEY, testStores); // '/stores' 라는 주소 안에 json 데이터가 들어감
    // console.log(mutate(STORE_KEY, stores))
  }, []);
  return {
    initializeStores,
  };
};
export default useTestStores;
