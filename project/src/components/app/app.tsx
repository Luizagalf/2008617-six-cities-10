import Main from '../../pages/Main';
import { Offer } from '../../types/offer';

type AppProps = {
  offers: Offer[];
};
const App = ({ offers }: AppProps): JSX.Element => <Main offers={offers} />;

export default App;
