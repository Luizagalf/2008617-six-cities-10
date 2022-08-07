import { Offer } from '../types/offer';
import OfferCard from '../components/offer-card';
import { useState } from 'react';

type OfferCardsListProps = {
  offers: Offer[];
};

const OfferCardsList = ({ offers }: OfferCardsListProps) => {
  const [selectedOffer, setSelectedOffer] = useState(0);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer: Offer) => (
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
