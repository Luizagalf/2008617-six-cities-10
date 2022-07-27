import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Card } from './types/types';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const cards: Card[] = [
  {
    premium: true,
    src: 'img/apartment-01.jpg',
    price: 120,
    stars: '80%',
    bookmark: false,
    name: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartment'
  },
  {
    premium: false,
    src: 'img/room.jpg',
    price: 80,
    stars: '80%',
    bookmark: true,
    name: 'Wood and stone place',
    type: 'Private room'
  },
  {
    premium: false,
    src: 'img/apartment-02.jpg',
    price: 132,
    stars: '80%',
    bookmark: false,
    name: 'Canal View Prinsengracht',
    type: 'Apartment'
  },
  {
    premium: true,
    src: 'img/apartment-03.jpg',
    price: 180,
    stars: '100%',
    bookmark: false,
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment'
  },
  {
    premium: false,
    src: 'img/room.jpg',
    price: 80,
    stars: '80%',
    bookmark: true,
    name: 'Wood and stone place',
    type: 'Apartment'
  }
];

root.render(
  <React.StrictMode>
    <App cards={cards} />
  </React.StrictMode>

);
