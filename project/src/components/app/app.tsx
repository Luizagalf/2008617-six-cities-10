import { Route, BrowserRouter, Routes } from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import Main from '../../pages/main';
import Login from '../../pages/login';
import Favorites from '../../pages/favorites';
import OfferPage from '../../pages/offer-page';
import Error from '../../pages/error';
import { Offer } from '../../types/offer';

import { AppRoute } from '../../consts';

type AppProps = {
  offers: Offer[];
};
const App = ({ offers }: AppProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Root} element={<Main offers={offers} />} />
      <Route path={AppRoute.Login} element={<Login />} />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute authorizationStatus>
            <Favorites offers={offers} />
          </PrivateRoute>
        }
      />
      <Route path={AppRoute.OfferPage} element={<OfferPage />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);
export default App;
