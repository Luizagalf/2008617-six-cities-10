import { Route, BrowserRouter, Routes } from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import OfferPage from '../../pages/offer-page/offer-page';
import Error from '../../pages/error/error';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';
import { useState } from 'react';

import { AppRoute } from '../../consts';

type AppProps = {
  offers: Offer[];
  reviews: Review[];
};
const App = ({ offers, reviews }: AppProps): JSX.Element => {
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(
    undefined
  );

  const onListItemHover = (listItemName: string | undefined) => {
    const currentOffer = offers.find((offer) => offer.name === listItemName);

    setSelectedOffer(currentOffer);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <Main
              offers={offers}
              onListItemHover={onListItemHover}
              selectedOffer={selectedOffer}
            />
          }
        />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus>
              <Favorites offers={offers} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.OfferPage}
          element={
            <OfferPage
              reviews={reviews}
              offers={offers}
              onListItemHover={onListItemHover}
            />
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
