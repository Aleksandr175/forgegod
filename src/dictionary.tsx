import { IDictionary } from './types';

export const dictionary: IDictionary = {
  goods: [
    {
      id: 1,
      name: 'Row Blue Ore',
      time: 2,
      cost: 3,
      type: 'resource',
      requirements: {
        resources: [],
        upgrades: {},
      },
    },
    {
      id: 2,
      name: 'Blue Ore',
      time: 3,
      cost: 7,
      type: 'good',
      requirements: {
        resources: [{ id: 1, qty: 2 }],
        upgrades: {},
      },
    },
    {
      id: 3,
      name: 'Ore Powder',
      time: 5,
      cost: 10,
      type: 'good',
      requirements: {
        resources: [{ id: 2, qty: 2 }],
        upgrades: {},
      },
    },
    {
      id: 4,
      name: 'Blue Ingot',
      time: 10,
      cost: 25,
      type: 'good',
      requirements: {
        resources: [
          { id: 3, qty: 1 },
          { id: 2, qty: 1 },
        ],
        upgrades: {},
      },
    },
  ],
};
