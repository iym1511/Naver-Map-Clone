import useMaps from "@/hooks/useMaps";
import Map from "./Map";
import { NaverMap } from "@/types/map";
import Markers from "./Markers";
import useCurrentStore from "@/hooks/useCurrentStore";

const MapSection = () => {
  const { initializeMap } = useMaps();
  const { clearCurrentStore } = useCurrentStore();

  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
    // map이 클릭됬을때 선택된 아이콘 헤제
    naver.maps.Event.addListener(map, 'click', clearCurrentStore);
  };

  return (
    <>
      <Map onLoad={onLoadMap} />
      <Markers />
    </>
  );
};

export default MapSection;
