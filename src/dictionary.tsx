import { IDictionary, IGood } from './types';

const RESOURCE_ROW_BLUE_ORE: IGood = {
  id: 1,
  name: 'Row Blue Ore',
  time: 2,
  cost: 3,
  type: 'resource',
  requirements: {
    resources: [],
    upgrades: {},
  },
};

const GOOD_BLUE_ORE: IGood = {
  id: 2,
  name: 'Blue Ore',
  time: 3,
  cost: 7,
  type: 'good',
  requirements: {
    resources: [{ id: 1, qty: 2 }],
    upgrades: {},
  },
};

const GOOD_ORDER_POWDER: IGood = {
  id: 3,
  name: 'Ore Powder',
  time: 5,
  cost: 10,
  type: 'good',
  requirements: {
    resources: [{ id: 2, qty: 2 }],
    upgrades: {},
  },
};

const GOOD_BLUE_INGOT: IGood = {
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
};

const RESOURCE_ROW_BRONZE_ORE: IGood = {
  id: 6,
  name: 'Row Bronze Ore',
  time: 2,
  cost: 3,
  type: 'resource',
  requirements: {
    resources: [],
    upgrades: {},
  },
};

const GOOD_BLUE_SWORD: IGood = {
  id: 11,
  name: 'Blue Sword',
  time: 20,
  cost: 35,
  type: 'good',
  requirements: {
    resources: [
      { id: 2, qty: 2 },
      { id: 3, qty: 2 },
    ],
    upgrades: {},
  },
};

const GOOD_SHORT_SWORD: IGood = {
  id: 30,
  name: 'Short Sword',
  time: 20,
  cost: 35,
  type: 'good',
  requirements: {
    resources: [
      { id: 2, qty: 2 },
      { id: 3, qty: 2 },
    ],
    upgrades: {},
  },
};

const GOOD_LONG_SWORD: IGood = {
  id: 31,
  name: 'Long Sword',
  time: 20,
  cost: 35,
  type: 'good',
  requirements: {
    resources: [
      { id: 2, qty: 2 },
      { id: 3, qty: 2 },
    ],
    upgrades: {},
  },
};

const GOOD_AXE: IGood = {
  id: 32,
  name: 'Axe',
  time: 20,
  cost: 35,
  type: 'good',
  requirements: {
    resources: [
      { id: 2, qty: 2 },
      { id: 3, qty: 2 },
    ],
    upgrades: {},
  },
};

const GOOD_BRONZE_BOW: IGood = {
  id: 33,
  name: 'Bronze Bow',
  time: 20,
  cost: 35,
  type: 'good',
  requirements: {
    resources: [
      { id: 2, qty: 2 },
      { id: 3, qty: 2 },
    ],
    upgrades: {},
  },
};

const GOOD_BRONZE_AXE: IGood = {
  id: 34,
  name: 'Bronze Axe',
  time: 20,
  cost: 35,
  type: 'good',
  requirements: {
    resources: [
      { id: 2, qty: 2 },
      { id: 3, qty: 2 },
    ],
    upgrades: {},
  },
};

const GOOD_BRONZE_BRACERS: IGood = {
  id: 35,
  name: 'Bronze Bracers',
  time: 20,
  cost: 35,
  type: 'good',
  requirements: {
    resources: [
      { id: 2, qty: 2 },
      { id: 3, qty: 2 },
    ],
    upgrades: {},
  },
};

const GOOD_BRONZE_SHIELD: IGood = {
  id: 36,
  name: 'Bronze Shield',
  time: 20,
  cost: 35,
  type: 'good',
  requirements: {
    resources: [
      { id: 2, qty: 2 },
      { id: 3, qty: 2 },
    ],
    upgrades: {},
  },
};

const GOOD_BRONZE_SCEPTER: IGood = {
  id: 37,
  name: 'Bronze Scepter',
  time: 20,
  cost: 35,
  type: 'good',
  requirements: {
    resources: [
      { id: 2, qty: 2 },
      { id: 3, qty: 2 },
    ],
    upgrades: {},
  },
};

const GOOD_BRONZE_SCYTHE: IGood = {
  id: 38,
  name: 'Bronze Scythe',
  time: 20,
  cost: 35,
  type: 'good',
  requirements: {
    resources: [
      { id: 2, qty: 2 },
      { id: 3, qty: 2 },
    ],
    upgrades: {},
  },
};

const GOOD_BRONZE_WAND: IGood = {
  id: 39,
  name: 'Bronze Wand',
  time: 20,
  cost: 35,
  type: 'good',
  requirements: {
    resources: [
      { id: 2, qty: 2 },
      { id: 3, qty: 2 },
    ],
    upgrades: {},
  },
};

const GOODS = [
  RESOURCE_ROW_BLUE_ORE,
  GOOD_BLUE_ORE,
  GOOD_ORDER_POWDER,
  GOOD_BLUE_INGOT,
  RESOURCE_ROW_BRONZE_ORE,

  GOOD_SHORT_SWORD,
  GOOD_LONG_SWORD,
  GOOD_AXE,
  GOOD_BRONZE_BOW,
  GOOD_BRONZE_AXE,
  GOOD_BRONZE_BRACERS,
  GOOD_BRONZE_SHIELD,
  GOOD_BRONZE_SCEPTER,
  GOOD_BRONZE_SCYTHE,
  GOOD_BRONZE_WAND,
];

export const dictionary: IDictionary = {
  goods: GOODS,
  mine: [
    {
      nextLvl: 2,
      requirements: {
        resources: [
          { id: 2, qty: 20 },
          { id: 3, qty: 20 },
        ],
        upgrades: {},
      },
      provideResourceIds: [3],
    },
    {
      nextLvl: 3,
      requirements: {
        resources: [
          { id: 2, qty: 20 },
          { id: 3, qty: 20 },
          { id: 4, qty: 20 },
        ],
        upgrades: {},
      },
      provideResourceIds: [3, 4],
    },
  ],
};