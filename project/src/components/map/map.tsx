import { Offer } from '../../types/offer';
import { Icon, LayerGroup, Marker } from 'leaflet';
import { useRef, useEffect } from 'react';
import useMap from '../../hooks/useMap';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../consts';
import { City } from '../../types/city';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  offers: Offer[];
  city: City;
  selectedOffer: Offer | undefined;
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

const Map = ({ city, offers, selectedOffer }: MapProps) => {
  const mapRef = useRef(null);
  const center = {
    lat: city.lat,
    lng: city.lng
  };
  const zoom = city.zoom;
  const map = useMap(mapRef, center, zoom);

  useEffect(() => {
    let layer: LayerGroup;
    if (map) {
      layer = new LayerGroup().addTo(map);
      offers.forEach((offer) => {
        new Marker(
          {
            lat: offer.lat,
            lng: offer.lng
          },
          {
            icon:
              selectedOffer !== undefined && offer.id === selectedOffer.id
                ? currentCustomIcon
                : defaultCustomIcon
          }
        ).addTo(layer);
      });

      return () => {
        layer?.clearLayers();
      };
    }
  }, [map, offers, selectedOffer]);

  return (
    <section
      style={{
        height: '100%',
        width: '100%',
        margin: '0 auto',
        maxWidth: '1144px'
      }}
      ref={mapRef}
    />
  );
};

export default Map;
