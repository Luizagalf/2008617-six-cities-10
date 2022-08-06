import { Offer } from '../types/offer';

export const offers: { [key: string]: Offer[] } = {
  Amsterdam: [
    {
      id: 1,
      premium: true,
      src: 'img/apartment-01.jpg',
      price: 120,
      stars: '80%',
      bookmark: false,
      name: 'Beautiful &amp; luxurious apartment at great location',
      type: 'Apartment'
    },
    {
      id: 2,
      premium: false,
      src: 'img/room.jpg',
      price: 80,
      stars: '80%',
      bookmark: true,
      name: 'Wood and stone place',
      type: 'Private room'
    },
    {
      id: 3,
      premium: false,
      src: 'img/apartment-02.jpg',
      price: 132,
      stars: '80%',
      bookmark: false,
      name: 'Canal View Prinsengracht',
      type: 'Apartment'
    },
    {
      id: 4,
      premium: true,
      src: 'img/apartment-03.jpg',
      price: 180,
      stars: '100%',
      bookmark: false,
      name: 'Nice, cozy, warm big bed apartment',
      type: 'Apartment'
    },
    {
      id: 5,
      premium: false,
      src: 'img/room.jpg',
      price: 80,
      stars: '80%',
      bookmark: true,
      name: 'Wood and stone place',
      type: 'Apartment'
    }
  ],
  Cologne: [
    {
      id: 4,
      premium: true,
      src: 'img/apartment-03.jpg',
      price: 180,
      stars: '100%',
      bookmark: false,
      name: 'Nice, cozy, warm big bed apartment',
      type: 'Apartment'
    },
    {
      id: 5,
      premium: false,
      src: 'img/room.jpg',
      price: 80,
      stars: '80%',
      bookmark: true,
      name: 'Wood and stone place',
      type: 'Apartment'
    }
  ]
};
