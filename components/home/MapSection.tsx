import useMaps, { INITIAL_CENTER, INITIAL_ZOOM } from "@/hooks/useMaps";
import Map from "./Map";
import { NaverMap } from "@/types/map";
import Markers from "./Markers";
import useCurrentStore from "@/hooks/useCurrentStore";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { Coordinates } from "@/types/srore";

const MapSection = () => {

  const { initializeMap } = useMaps();
  const { clearCurrentStore } = useCurrentStore();
  const router = useRouter();
  // router.asPath 는 localhost:3000 뒤에 나오는 주소 문자열
  const query = useMemo(() => new URLSearchParams(router.asPath.slice(1)), []);
  const initialZoom = useMemo(
    () =>
      // url query파라미터에 zoom 이 있디면 initialZoom으로 사용 아니면 기존값
      query.get('zoom') ? Number(query.get('zoom')) : INITIAL_ZOOM,
    [query]
  );

  const initialCenter = useMemo<Coordinates>(
    () =>
      // url query파라미터에 lng,lat 있으면 initialCenter로 사용 아니면 기존값
      query.get('lat') && query.get('lng')
        ? [Number(query.get('lat')), Number(query.get('lng'))]
        : INITIAL_CENTER,
    [query]
  );


  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
    // map이 클릭됬을때 선택된 아이콘 헤제
    naver.maps.Event.addListener(map, "click", clearCurrentStore);
  };

  return (
    <>
      <Map
        onLoad={onLoadMap}
        initialZoom={initialZoom}
        initialCenter={initialCenter}
      />
      <Markers />
    </>
  );
};

export default MapSection;
