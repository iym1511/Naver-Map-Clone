import React from 'react';
import useSWR from 'swr';
import { STORE_KEY } from '../../hooks/useStores';
import { Store } from '@/types/srore';
import { ImageIcon, NaverMap } from '@/types/map';
import { MAP_KEY } from '@/hooks/useMaps';
import Marker from './Marker';
import useCurrentStore, { CURRENT_STORE_KEY } from '@/hooks/useCurrentStore';

const Markers = () => {

  // 전역상태로 관리되고 있는 매장데이터를 받아옴
  const { data: map } = useSWR<NaverMap>(MAP_KEY);
  const { data: stores } = useSWR<Store[]>(STORE_KEY);

  const { data: currentStore } = useSWR<Store>(CURRENT_STORE_KEY);
  const { setCurrentStore, clearCurrentStore } = useCurrentStore();

  // map이랑 stores가 있다면 띄워줌

  if (!map || !stores) return null;

  return (
    <>
      {stores.map((store) => {
        return (
          <Marker
            map={map}
            coordinates={store.coordinates} // 마커를 그릴 위치
            icon={generateStoreMarkerIcon(store.season, false)}
            onClick={() => {
              setCurrentStore(store);
            }}
            key={store.nid}
          />
        );
      })}
      {/* 새로운 마커로 최상단에 덮어씌움 (선택되었을때) */}
      {currentStore && (
        <Marker
          map={map}
          coordinates={currentStore.coordinates} // 해당매장위치에
          icon={generateStoreMarkerIcon(currentStore.season, true)}
          onClick={clearCurrentStore}
          key={currentStore.nid}
        />
      )}
    </>
  );
};
export default Markers;

const MARKER_HEIGHT = 64;
const MARKER_WIDTH = 54;
const NUMBER_OF_MARKER = 13;
const SCALE = 2 / 3;

const SCALED_MARKER_WIDTH = MARKER_WIDTH * SCALE;
const SCALED_MARKER_HEIGHT = MARKER_HEIGHT * SCALE;

export function generateStoreMarkerIcon(
  markerIndex: number,
  isSelected: boolean
): ImageIcon {
  /** https://navermaps.github.io/maps.js.ncp/docs/tutorial-8-marker-retina-sprite.example.html */
  return {
    url: isSelected ? 'images/markers-selected.png' : 'images/markers.png', // 마크선택시 빨갛게 
    size: new naver.maps.Size(SCALED_MARKER_WIDTH, SCALED_MARKER_HEIGHT), // 마커 사이즈 
    origin: new naver.maps.Point(SCALED_MARKER_WIDTH * markerIndex, 0), // width에 1을 곱하고 y에 0을 선언하면 첫번쨰이미지 잘라옴
    scaledSize: new naver.maps.Size(
      SCALED_MARKER_WIDTH * NUMBER_OF_MARKER,
      SCALED_MARKER_HEIGHT
    ),
  };
}
