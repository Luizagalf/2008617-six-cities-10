import Main from '../../pages/Main';
import { Card } from '../../types/types';

type AppProps = {
  cards: Card[];
};
function App({ cards }: AppProps): JSX.Element {
  return <Main cards={cards} />;

export default App;
