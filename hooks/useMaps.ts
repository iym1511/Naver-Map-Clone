import { NaverMap } from "@/types/map";
import { Coordinates } from "@/types/srore";
import { useCallback } from "react";
import useSWR, { mutate } from 'swr';

export const INITIAL_CENTER: Coordinates = [37.5262411, 126.99289439];
export const INITIAL_ZOOM: number = 10;

export const MAP_KEY = '/map';

const useMaps = () => {

  const { data: map } = useSWR(MAP_KEY);

  const initializeMap = useCallback((map: NaverMap) => {
    mutate(MAP_KEY, map);
  }, []);

  // 맵의 좌표와 줌레벨을 변경 (초기화)
  const resetMapOptions = useCallback(() => {
    map.morth(new naver.maps.LatLng(...INITIAL_CENTER), INITIAL_ZOOM); // motch() : map의 메소드(부드러운 UX화면 전환)
  },[])

  // 현제 지도와 줌 레벨을 return
  const getMapOptions = useCallback(() => {
    const mapCenter = map.getCenter(); // 네이버 지도 객체
    const center:Coordinates = [mapCenter.lat(), mapCenter.lng()];
    const zoom = map.getZoom();

    return { center, zoom }
  },[map])
  // 💡 useCallback 의존성 배열이 비어있으면 첫실행 이후에 재사용 지속, 
  // 담겨있다면 그 데이터가 실행될때만 새로받아옴
  
  return {
    initializeMap,
    resetMapOptions,
    getMapOptions
  }

}

export default useMaps