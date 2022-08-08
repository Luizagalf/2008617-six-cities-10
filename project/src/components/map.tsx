import { Offer } from '../types/offer';
import { Icon, Marker } from 'leaflet';
import { useRef, useEffect } from 'react';
import useMap from '../hooks/useMap';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../consts';
import { City } from '../types/city';

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
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.lat,
          lng: offer.lng
        });

        marker
          .setIcon(
            selectedOffer !== undefined && offer.name === selectedOffer.name
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, offers, selectedOffer]);

  return (
    <section
      className="cities__map"
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
