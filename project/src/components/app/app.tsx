import Main from '../../pages/Main';
import { ICard } from '../../types/interfaces';

function App(cards: ICard[]): JSX.Element {
  return <Main cards={cards} />;
}

export default App;
