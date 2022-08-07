import { Offer } from '../types/offer';
import { groupBy } from '../functions';
import OfferCardFavorites from './offer-card-favorites';

type OfferCardsListProps = {
  offers: Offer[];
};

const OfferCardsListFavorites = ({ offers }: OfferCardsListProps) => (
  <ul className="favorites__list">
    {Object.entries(groupBy(offers)).map(([key, value]) => (
      <li className="favorites__locations-items" key={key}>
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>{key}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {value.map(
            (item: Offer) =>
              item.bookmark && (
                <OfferCardFavorites offer={item} key={item['id']} />
              )
          )}
        </div>
      </li>
    ))}
  </ul>
);

export default OfferCardsListFavorites;
