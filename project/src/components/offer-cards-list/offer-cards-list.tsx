import { Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';
import { useState } from 'react';

type OfferCardsListProps = {
  offers: Offer[];
  onListItemHover: (arg: string | undefined) => void;
};

const OfferCardsList = ({ offers, onListItemHover }: OfferCardsListProps) => {
  const [selectedOffer, setSelectedOffer] = useState(0);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer: Offer) => (
        <div
          key={offer.id}
          onMouseEnter={() => {
            setSelectedOffer(offer.id);
            onListItemHover(offer.name);
          }}
          onMouseLeave={() => {
            setSelectedOffer(offer.id);
            onListItemHover(undefined);
          }}
        >
          <OfferCard offer={offer} isSelected={selectedOffer === offer.id} />
        </div>
      ))}
    </div>
  );
};

export default OfferCardsList;
