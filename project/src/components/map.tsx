/* eslint-disable @typescript-eslint/no-unused-vars */
import { Offer } from '../types/offer';
import { Icon, Marker } from 'leaflet';
import { useRef, useEffect } from 'react';
import useMap from '../hooks/useMap';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../consts';

type MapProps = {
  offers: Offer[];
  city: string;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const Map = ({ city, offers }: MapProps) => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  // useEffect(() => {
  //   if (map) {
  //     offers.forEach((point) => {
  //       const marker = new Marker({
  //         latitude: point.latitude,
  //         longitude: point.longitude
  //       });

  //       marker
  //         .setIcon(
  //           selectedPoint !== undefined && point.title === selectedPoint.title
  //             ? currentCustomIcon
  //             : defaultCustomIcon
  //         )
  //         .addTo(map);
  //     });
  //   }
  // }, [map, points, selectedPoint]);

  return <div style={{ height: '500px' }} ref={mapRef}></div>;
};

export default Map;
