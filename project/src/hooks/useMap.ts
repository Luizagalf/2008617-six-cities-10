import { useEffect, useState, MutableRefObject, useRef } from 'react';
import { Map, TileLayer } from 'leaflet';

const useMap = (
  mapRef: MutableRefObject<HTMLElement | null>,
  center: { lat: number; lng: number },
  zoom: number
): Map | null => {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && map === null && !isRenderRef.current) {
      const instance = new Map(mapRef.current, {
        center,
        zoom
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderRef.current = true;
    }
  }, [mapRef, map, center, zoom]);

  return map;
};

export default useMap;
