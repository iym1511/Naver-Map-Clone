import { INITIAL_CENTER, INITIAL_ZOOM } from "@/hooks/useMaps";
import { NaverMap } from "@/types/map";
import { Coordinates} from "@/types/srore";
import Script from "next/script";
import { useEffect, useRef } from "react";
import styles from '../../styles/map.module.scss';

interface Props  {
  mapId?: string;
  initialCenter?: Coordinates;
  initialZoom?: number;
  onLoad?: (map: NaverMap) => void;
};

const Map = ({
  mapId = 'map',
  initialCenter = INITIAL_CENTER,
  initialZoom = INITIAL_ZOOM,
  onLoad,
}: Props) => {

  const mapRef = useRef<NaverMap | null>(null);

  const initiallizeMap = () => {
    const mapOptions = {
      center: new window.naver.maps.LatLng(...initialCenter),
      zoom: initialZoom,
      minZoom: 9,
      scaleControl: false,
      mapDataControl: false,
      logoControlOptions: {
        position: naver.maps.Position.BOTTOM_LEFT,
      },
    };
    /** https://navermaps.github.io/maps.js.ncp/docs/tutorial-2-Getting-Started.html */
    const map = new window.naver.maps.Map(mapId, mapOptions);
    mapRef.current = map;

    if (onLoad) {
      onLoad(map);
    }
  };

  useEffect(() => {
    return () => {
      mapRef.current?.destroy(); // destroy() 메서드를 호출하여 컴포넌트가 언마운트될 때 지도 리소스를 정리하고 해제합니다
    };
  }, []);

  return (
    <div>
      <Script
        strategy="afterInteractive" // 제일빠른 로딩
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}`}
        onReady={initiallizeMap} // onLoad는 한번만 불러와서 Ready사용
      />
      <div id={mapId} className={styles.map} />
    </div>
  );
};

export default Map;
