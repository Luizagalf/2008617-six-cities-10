import { Offer } from '../types/offer';
import OfferCard from '../components/offer-card';
import { useState } from 'react';
import { groupBy } from '../functions';

type OfferCardsListProps = {
  offers: Offer[];
  city: string;
};

const OfferCardsList = ({ offers, city }: OfferCardsListProps) => {
  const [selectedOffer, setSelectedOffer] = useState(0);

  return (
    <div className="cities__places-list places__list tabs__content">
      {groupBy(offers, 'city')[city].map((offer: Offer) => (
        <div
          key={offer.id}
          onMouseEnter={() => setSelectedOffer(offer.id)}
          onMouseLeave={() => setSelectedOffer(offer.id)}
        >
          <OfferCard offer={offer} isSelected={selectedOffer === offer.id} />
        </div>
      ))}
    </div>
  );
};

export default OfferCardsList;
