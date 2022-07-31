import { Route, BrowserRouter, Routes } from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import Main from '../../pages/Main';
import Login from '../../pages/Login';
import Favorites from '../../pages/Favorites';
import OfferPage from '../../pages/OfferPage';
import Error from '../../pages/Error';
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
          <PrivateRoute authorizationStatus={false}>
            <Favorites />
          </PrivateRoute>
        }
      />
      <Route path={AppRoute.OfferPage} element={<OfferPage />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);
export default App;
