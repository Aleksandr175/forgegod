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

const GOOD_BLUE_POWDER: IGood = {
  id: 3,
  name: 'Blue Powder',
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

const GOOD_BRONZE_ORE: IGood = {
  id: 7,
  name: 'Bronze Ore',
  time: 3,
  cost: 7,
  type: 'good',
  requirements: {
    resources: [{ id: 6, qty: 2 }],
    upgrades: {},
  },
};

const GOOD_BRONZE_POWDER: IGood = {
  id: 8,
  name: 'Bronze Powder',
  time: 5,
  cost: 10,
  type: 'good',
  requirements: {
    resources: [{ id: 7, qty: 2 }],
    upgrades: {},
  },
};

const GOOD_BRONZE_INGOT: IGood = {
  id: 9,
  name: 'Bronze Ingot',
  time: 10,
  cost: 25,
  type: 'good',
  requirements: {
    resources: [
      { id: 7, qty: 1 },
      { id: 6, qty: 1 },
    ],
    upgrades: {},
  },
};

const RESOURCE_ROW_COBALT_ORE: IGood = {
  id: 10,
  name: 'Row Bronze Ore',
  time: 2,
  cost: 3,
  type: 'resource',
  requirements: {
    resources: [],
    upgrades: {},
  },
};

const GOOD_COBALT_ORE: IGood = {
  id: 11,
  name: 'Bronze Ore',
  time: 3,
  cost: 7,
  type: 'good',
  requirements: {
    resources: [{ id: 10, qty: 2 }],
    upgrades: {},
  },
};

const GOOD_COBALT_POWDER: IGood = {
  id: 12,
  name: 'Bronze Powder',
  time: 5,
  cost: 10,
  type: 'good',
  requirements: {
    resources: [{ id: 11, qty: 2 }],
    upgrades: {},
  },
};

const GOOD_COBALT_INGOT: IGood = {
  id: 13,
  name: 'Bronze Ingot',
  time: 10,
  cost: 25,
  type: 'good',
  requirements: {
    resources: [
      { id: 11, qty: 1 },
      { id: 10, qty: 1 },
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
  GOOD_BLUE_POWDER,
  GOOD_BLUE_INGOT,
  RESOURCE_ROW_BRONZE_ORE,
  GOOD_BRONZE_ORE,
  GOOD_BRONZE_POWDER,
  GOOD_BRONZE_INGOT,

  RESOURCE_ROW_COBALT_ORE,
  GOOD_COBALT_ORE,
  GOOD_COBALT_POWDER,
  GOOD_COBALT_INGOT,

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
  goods: [
    {
      id: 1,
      name: 'Row Blue Ore',
      time: 0,
      cost: 3,
      type: 'resource',
      requirements: { resources: [], upgrades: {} },
      resourcesCost: 0,
      additionalCost: 3,
    },
    {
      id: 2,
      name: 'Blue Ore',
      time: 3,
      cost: 7,
      type: 'good',
      requirements: { resources: [{ id: 1, qty: 2 }], upgrades: {} },
      resourcesCost: 6,
      additionalCost: 1,
    },
    {
      id: 3,
      name: 'Blue Powder',
      time: 5,
      cost: 16,
      type: 'good',
      requirements: { resources: [{ id: 2, qty: 2 }], upgrades: {} },
      resourcesCost: 14,
      additionalCost: 2,
    },
    {
      id: 4,
      name: 'Blue Ingot',
      time: 10,
      cost: 34,
      type: 'good',
      requirements: {
        resources: [
          { id: 3, qty: 1 },
          { id: 2, qty: 2 },
        ],
        upgrades: {},
      },
      resourcesCost: 30,
      additionalCost: 4,
    },
    {
      id: 5,
      name: 'Wood',
      time: 0,
      cost: 2,
      type: 'good',
      requirements: { resources: [], upgrades: {} },
      resourcesCost: 0,
      additionalCost: 2,
    },
    {
      id: 6,
      name: 'Row Bronze Ore',
      time: 0,
      cost: 4,
      type: 'resource',
      requirements: { resources: [], upgrades: {} },
      resourcesCost: 0,
      additionalCost: 4,
    },
    {
      id: 7,
      name: 'Bronze Ore',
      time: 4,
      cost: 10,
      type: 'good',
      requirements: { resources: [{ id: 6, qty: 2 }], upgrades: {} },
      resourcesCost: 8,
      additionalCost: 2,
    },
    {
      id: 8,
      name: 'Bronze Powder',
      time: 6,
      cost: 23,
      type: 'good',
      requirements: { resources: [{ id: 7, qty: 2 }], upgrades: {} },
      resourcesCost: 20,
      additionalCost: 3,
    },
    {
      id: 9,
      name: 'Bronze Ingot',
      time: 12,
      cost: 48,
      type: 'good',
      requirements: {
        resources: [
          { id: 7, qty: 2 },
          { id: 8, qty: 1 },
        ],
        upgrades: {},
      },
      resourcesCost: 43,
      additionalCost: 5,
    },
    {
      id: 10,
      name: 'Row Cobalt Ore',
      time: 0,
      cost: 5,
      type: 'resource',
      requirements: { resources: [], upgrades: {} },
      resourcesCost: 0,
      additionalCost: 5,
    },
    {
      id: 11,
      name: 'Cobalt Ore',
      time: 5,
      cost: 13,
      type: 'good',
      requirements: { resources: [{ id: 10, qty: 2 }], upgrades: {} },
      resourcesCost: 10,
      additionalCost: 3,
    },
    {
      id: 12,
      name: 'Cobalt Powder',
      time: 7,
      cost: 30,
      type: 'good',
      requirements: { resources: [{ id: 11, qty: 2 }], upgrades: {} },
      resourcesCost: 26,
      additionalCost: 4,
    },
    {
      id: 13,
      name: 'Cobalt Ingot',
      time: 14,
      cost: 62,
      type: 'good',
      requirements: {
        resources: [
          { id: 11, qty: 2 },
          { id: 12, qty: 1 },
        ],
        upgrades: {},
      },
      resourcesCost: 56,
      additionalCost: 6,
    },
    {
      id: 18,
      name: 'Row Gold Ore',
      time: 0,
      cost: 7,
      type: 'good',
      requirements: { resources: [], upgrades: {} },
      resourcesCost: 0,
      additionalCost: 7,
    },
    {
      id: 19,
      name: 'Gold Ore',
      time: 6,
      cost: 18,
      type: 'good',
      requirements: { resources: [{ id: 18, qty: 2 }], upgrades: {} },
      resourcesCost: 14,
      additionalCost: 4,
    },
    {
      id: 20,
      name: 'Gold Powder',
      time: 8,
      cost: 41,
      type: 'good',
      requirements: { resources: [{ id: 19, qty: 2 }], upgrades: {} },
      resourcesCost: 36,
      additionalCost: 5,
    },
    {
      id: 21,
      name: 'Gold Ingot',
      time: 16,
      cost: 84,
      type: 'good',
      requirements: {
        resources: [
          { id: 20, qty: 1 },
          { id: 19, qty: 2 },
        ],
        upgrades: {},
      },
      resourcesCost: 77,
      additionalCost: 7,
    },
    {
      id: 22,
      name: 'Row Coal Ore',
      time: 0,
      cost: 4,
      type: 'good',
      requirements: { resources: [], upgrades: {} },
      resourcesCost: 0,
      additionalCost: 4,
    },
    {
      id: 23,
      name: 'Coal Ore',
      time: 4,
      cost: 10,
      type: 'good',
      requirements: { resources: [{ id: 22, qty: 2 }], upgrades: {} },
      resourcesCost: 8,
      additionalCost: 2,
    },
    {
      id: 24,
      name: 'Coal Powder',
      time: 6,
      cost: 23,
      type: 'good',
      requirements: { resources: [{ id: 23, qty: 2 }], upgrades: {} },
      resourcesCost: 20,
      additionalCost: 3,
    },
    {
      id: 25,
      name: 'Coal Ingot',
      time: 12,
      cost: 48,
      type: 'good',
      requirements: {
        resources: [
          { id: 24, qty: 1 },
          { id: 23, qty: 2 },
        ],
        upgrades: {},
      },
      resourcesCost: 43,
      additionalCost: 5,
    },
    {
      id: 26,
      name: 'Row Amethyst Ore',
      time: 0,
      cost: 10,
      type: 'good',
      requirements: { resources: [], upgrades: {} },
      resourcesCost: 0,
      additionalCost: 10,
    },
    {
      id: 27,
      name: 'Amethyst Ore',
      time: 8,
      cost: 26,
      type: 'good',
      requirements: { resources: [{ id: 26, qty: 2 }], upgrades: {} },
      resourcesCost: 20,
      additionalCost: 6,
    },
    {
      id: 28,
      name: 'Amethyst Powder',
      time: 10,
      cost: 60,
      type: 'good',
      requirements: { resources: [{ id: 27, qty: 2 }], upgrades: {} },
      resourcesCost: 52,
      additionalCost: 8,
    },
    {
      id: 29,
      name: 'Amethyst Ingot',
      time: 20,
      cost: 123,
      type: 'good',
      requirements: {
        resources: [
          { id: 28, qty: 1 },
          { id: 27, qty: 2 },
        ],
        upgrades: {},
      },
      resourcesCost: 112,
      additionalCost: 11,
    },
    {
      id: 30,
      name: 'Knife',
      time: 15,
      cost: 52,
      type: 'good',
      requirements: {
        resources: [
          { id: 2, qty: 2 },
          { id: 3, qty: 2 },
        ],
        upgrades: {},
      },
      resourcesCost: 46,
      additionalCost: 6,
    },
    {
      id: 31,
      name: 'Long Sword',
      time: 20,
      cost: 75,
      type: 'good',
      requirements: {
        resources: [
          { id: 2, qty: 4 },
          { id: 4, qty: 1 },
        ],
        upgrades: { skillIds: [7] },
      },
      resourcesCost: 62,
      additionalCost: 13,
    },
    {
      id: 32,
      name: 'Axe',
      time: 50,
      cost: 85,
      type: 'good',
      requirements: {
        resources: [{ id: 4, qty: 2 }],
        upgrades: { skillIds: [7] },
      },
      resourcesCost: 68,
      additionalCost: 17,
    },
    {
      id: 33,
      name: 'Bronze Bow',
      time: 25,
      cost: 70,
      type: 'good',
      requirements: {
        resources: [
          { id: 7, qty: 1 },
          { id: 9, qty: 1 },
        ],
        upgrades: { skillIds: [8] },
      },
      resourcesCost: 58,
      additionalCost: 12,
    },
    {
      id: 34,
      name: 'Bronze Hammer',
      time: 50,
      cost: 135,
      type: 'good',
      requirements: {
        resources: [
          { id: 9, qty: 2 },
          { id: 7, qty: 2 },
        ],
        upgrades: { skillIds: [8] },
      },
      resourcesCost: 116,
      additionalCost: 19,
    },
    {
      id: 35,
      name: 'Bronze Bracers',
      time: 50,
      cost: 136,
      type: 'good',
      requirements: {
        resources: [
          { id: 8, qty: 1 },
          { id: 9, qty: 2 },
        ],
        upgrades: { skillIds: [11] },
      },
      resourcesCost: 119,
      additionalCost: 17,
    },
    {
      id: 36,
      name: 'Bronze Shield',
      time: 40,
      cost: 97,
      type: 'good',
      requirements: {
        resources: [
          { id: 4, qty: 1 },
          { id: 9, qty: 1 },
        ],
        upgrades: { skillIds: [10] },
      },
      resourcesCost: 82,
      additionalCost: 15,
    },
    {
      id: 37,
      name: 'Bronze Scepter',
      time: 75,
      cost: 215,
      type: 'good',
      requirements: {
        resources: [
          { id: 8, qty: 2 },
          { id: 9, qty: 3 },
        ],
        upgrades: { skillIds: [9] },
      },
      resourcesCost: 190,
      additionalCost: 25,
    },
    {
      id: 38,
      name: 'Scythe',
      time: 60,
      cost: 125,
      type: 'good',
      requirements: {
        resources: [{ id: 4, qty: 3 }],
        upgrades: { skillIds: [8] },
      },
      resourcesCost: 102,
      additionalCost: 23,
    },
    {
      id: 39,
      name: 'Bronze Wand',
      time: 65,
      cost: 160,
      type: 'good',
      requirements: {
        resources: [
          { id: 8, qty: 4 },
          { id: 9, qty: 1 },
        ],
        upgrades: { skillIds: [9] },
      },
      resourcesCost: 140,
      additionalCost: 20,
    },
    {
      id: 41,
      name: 'Wooden Sword',
      time: 3,
      cost: 11,
      type: 'good',
      requirements: {
        resources: [{ id: 5, qty: 3 }],
        upgrades: { skillIds: [] },
      },
      resourcesCost: 6,
      additionalCost: 5,
    },
    {
      id: 42,
      name: 'Wooden Axe',
      time: 4,
      cost: 15,
      type: 'good',
      requirements: {
        resources: [{ id: 5, qty: 4 }],
        upgrades: { skillIds: [7] },
      },
      resourcesCost: 8,
      additionalCost: 7,
    },
    {
      id: 43,
      name: 'Wooden Bow',
      time: 9,
      cost: 24,
      type: 'good',
      requirements: {
        resources: [
          { id: 5, qty: 4 },
          { id: 2, qty: 1 },
        ],
        upgrades: { skillIds: [8] },
      },
      resourcesCost: 15,
      additionalCost: 9,
    },
    {
      id: 44,
      name: 'Wooden Hammer',
      time: 10,
      cost: 22,
      type: 'good',
      requirements: {
        resources: [
          { id: 5, qty: 3 },
          { id: 1, qty: 2 },
        ],
        upgrades: { skillIds: [8] },
      },
      resourcesCost: 12,
      additionalCost: 10,
    },
    {
      id: 46,
      name: 'Wooden Shield',
      time: 6,
      cost: 16,
      type: 'good',
      requirements: {
        resources: [
          { id: 1, qty: 2 },
          { id: 5, qty: 2 },
        ],
        upgrades: { skillIds: [10] },
      },
      resourcesCost: 10,
      additionalCost: 6,
    },
    {
      id: 50,
      name: 'Cobalt Knife',
      time: 20,
      cost: 90,
      type: 'good',
      requirements: {
        resources: [
          { id: 10, qty: 3 },
          { id: 11, qty: 1 },
          { id: 210, qty: 1 },
        ],
        upgrades: {},
      },
      resourcesCost: 78,
      additionalCost: 12,
    },
    {
      id: 51,
      name: 'Cobalt Sword',
      time: 20,
      cost: 110,
      type: 'good',
      requirements: {
        resources: [
          { id: 11, qty: 3 },
          { id: 210, qty: 1 },
        ],
        upgrades: { skillIds: [7] },
      },
      resourcesCost: 89,
      additionalCost: 21,
    },
    {
      id: 52,
      name: 'Cobalt Axe',
      time: 30,
      cost: 238,
      type: 'good',
      requirements: {
        resources: [
          { id: 11, qty: 3 },
          { id: 13, qty: 2 },
          { id: 210, qty: 1 },
        ],
        upgrades: { skillIds: [7] },
      },
      resourcesCost: 213,
      additionalCost: 25,
    },
    {
      id: 53,
      name: 'Cobalt Bow',
      time: 25,
      cost: 230,
      type: 'good',
      requirements: {
        resources: [
          { id: 11, qty: 2 },
          { id: 13, qty: 2 },
          { id: 210, qty: 1 },
        ],
        upgrades: { skillIds: [8] },
      },
      resourcesCost: 200,
      additionalCost: 30,
    },
    {
      id: 54,
      name: 'Cobalt Hammer',
      time: 40,
      cost: 331,
      type: 'good',
      requirements: {
        resources: [
          { id: 13, qty: 4 },
          { id: 210, qty: 1 },
        ],
        upgrades: { skillIds: [8] },
      },
      resourcesCost: 298,
      additionalCost: 33,
    },
    {
      id: 55,
      name: 'Cobalt Bracers',
      time: 40,
      cost: 306,
      type: 'good',
      requirements: {
        resources: [
          { id: 12, qty: 1 },
          { id: 13, qty: 3 },
          { id: 210, qty: 1 },
        ],
        upgrades: { skillIds: [11] },
      },
      resourcesCost: 266,
      additionalCost: 40,
    },
    {
      id: 56,
      name: 'Cobalt Shield',
      time: 35,
      cost: 277,
      type: 'good',
      requirements: {
        resources: [
          { id: 4, qty: 2 },
          { id: 13, qty: 2 },
          { id: 210, qty: 1 },
        ],
        upgrades: { skillIds: [10] },
      },
      resourcesCost: 242,
      additionalCost: 35,
    },
    {
      id: 57,
      name: 'Cobalt Scepter',
      time: 75,
      cost: 299,
      type: 'good',
      requirements: {
        resources: [
          { id: 12, qty: 1 },
          { id: 13, qty: 2 },
          { id: 210, qty: 2 },
        ],
        upgrades: { skillIds: [9] },
      },
      resourcesCost: 254,
      additionalCost: 45,
    },
    {
      id: 58,
      name: 'Cobalt Scythe',
      time: 45,
      cost: 326,
      type: 'good',
      requirements: {
        resources: [
          { id: 13, qty: 3 },
          { id: 210, qty: 2 },
        ],
        upgrades: { skillIds: [8] },
      },
      resourcesCost: 286,
      additionalCost: 40,
    },
    {
      id: 59,
      name: 'Cobalt Wand',
      time: 65,
      cost: 297,
      type: 'good',
      requirements: {
        resources: [
          { id: 12, qty: 3 },
          { id: 13, qty: 1 },
          { id: 210, qty: 2 },
        ],
        upgrades: { skillIds: [9] },
      },
      resourcesCost: 252,
      additionalCost: 45,
    },
    {
      id: 61,
      name: 'Hell Sword',
      time: 20,
      cost: 35,
      type: 'good',
      requirements: {
        resources: [
          { id: 21, qty: 3 },
          { id: 203, qty: 1 },
          { id: 23, qty: 1 },
        ],
        upgrades: { skillIds: [7] },
      },
    },
    {
      id: 63,
      name: 'Hell Bow',
      time: 20,
      cost: 65,
      type: 'good',
      requirements: {
        resources: [
          { id: 21, qty: 3 },
          { id: 24, qty: 2 },
          { id: 203, qty: 1 },
        ],
        upgrades: { skillIds: [8] },
      },
    },
    {
      id: 64,
      name: 'Hell Hammer',
      time: 30,
      cost: 80,
      type: 'good',
      requirements: {
        resources: [
          { id: 34, qty: 1 },
          { id: 21, qty: 2 },
          { id: 25, qty: 2 },
          { id: 203, qty: 1 },
        ],
        upgrades: { skillIds: [8] },
      },
    },
    {
      id: 65,
      name: 'Hell Bracers',
      time: 25,
      cost: 55,
      type: 'good',
      requirements: {
        resources: [
          { id: 35, qty: 1 },
          { id: 21, qty: 1 },
          { id: 25, qty: 2 },
          { id: 203, qty: 1 },
        ],
        upgrades: { skillIds: [11] },
      },
    },
    {
      id: 66,
      name: 'Hell Shield',
      time: 40,
      cost: 125,
      type: 'good',
      requirements: {
        resources: [
          { id: 36, qty: 1 },
          { id: 21, qty: 1 },
          { id: 25, qty: 4 },
          { id: 203, qty: 1 },
        ],
        upgrades: { skillIds: [10] },
      },
    },
    {
      id: 67,
      name: 'Hell Scepter',
      time: 40,
      cost: 130,
      type: 'good',
      requirements: {
        resources: [
          { id: 37, qty: 1 },
          { id: 20, qty: 3 },
          { id: 25, qty: 1 },
          { id: 203, qty: 2 },
        ],
        upgrades: { skillIds: [9] },
      },
    },
    {
      id: 70,
      name: 'Bone Knife',
      time: 45,
      cost: 125,
      type: 'good',
      requirements: {
        resources: [
          { id: 29, qty: 2 },
          { id: 204, qty: 1 },
          { id: 211, qty: 1 },
        ],
        upgrades: { skillIds: [] },
      },
    },
    {
      id: 71,
      name: 'Bone Sword',
      time: 65,
      cost: 175,
      type: 'good',
      requirements: {
        resources: [
          { id: 29, qty: 3 },
          { id: 4, qty: 2 },
          { id: 204, qty: 1 },
          { id: 211, qty: 1 },
        ],
        upgrades: { skillIds: [7] },
      },
    },
    {
      id: 72,
      name: 'Bone Axe',
      time: 20,
      cost: 35,
      type: 'good',
      requirements: {
        resources: [
          { id: 2, qty: 2 },
          { id: 29, qty: 3 },
          { id: 204, qty: 1 },
          { id: 211, qty: 1 },
        ],
        upgrades: { skillIds: [7] },
      },
    },
    {
      id: 73,
      name: 'Bone Bow',
      time: 20,
      cost: 65,
      type: 'good',
      requirements: {
        resources: [
          { id: 43, qty: 1 },
          { id: 29, qty: 3 },
          { id: 211, qty: 1 },
          { id: 204, qty: 1 },
        ],
        upgrades: { skillIds: [8] },
      },
    },
    {
      id: 75,
      name: 'Axe',
      time: 30,
      cost: 80,
      type: 'good',
      requirements: {
        resources: [
          { id: 35, qty: 1 },
          { id: 29, qty: 3 },
          { id: 204, qty: 1 },
          { id: 211, qty: 1 },
        ],
        upgrades: { skillIds: [11] },
      },
    },
    {
      id: 76,
      name: 'Bronze Bow',
      time: 25,
      cost: 55,
      type: 'good',
      requirements: {
        resources: [
          { id: 36, qty: 1 },
          { id: 29, qty: 4 },
          { id: 204, qty: 1 },
          { id: 211, qty: 1 },
        ],
        upgrades: { skillIds: [10] },
      },
    },
    {
      id: 77,
      name: 'Bone Scepter',
      time: 40,
      cost: 125,
      type: 'good',
      requirements: {
        resources: [
          { id: 37, qty: 1 },
          { id: 28, qty: 3 },
          { id: 204, qty: 1 },
          { id: 211, qty: 2 },
        ],
        upgrades: { skillIds: [9] },
      },
    },
    {
      id: 78,
      name: 'Bone Scythe',
      time: 40,
      cost: 130,
      type: 'good',
      requirements: {
        resources: [
          { id: 38, qty: 1 },
          { id: 29, qty: 2 },
          { id: 204, qty: 1 },
          { id: 211, qty: 2 },
        ],
        upgrades: { skillIds: [8] },
      },
    },
    {
      id: 200,
      name: 'Toxic Crystal',
      time: 10,
      cost: 100,
      type: 'crystal',
      requirements: { resources: [], upgrades: {} },
    },
    {
      id: 201,
      name: 'Fire Crystal',
      time: 10,
      cost: 100,
      type: 'crystal',
      requirements: { resources: [], upgrades: {} },
    },
    {
      id: 202,
      name: 'Silver Crystal',
      time: 10,
      cost: 100,
      type: 'crystal',
      requirements: { resources: [], upgrades: {} },
    },
    {
      id: 203,
      name: 'Gold Crystal',
      time: 10,
      cost: 100,
      type: 'crystal',
      requirements: { resources: [], upgrades: {} },
    },
    {
      id: 204,
      name: 'Dragon Crystal',
      time: 10,
      cost: 150,
      type: 'crystal',
      requirements: { resources: [], upgrades: {} },
    },
    {
      id: 210,
      name: 'Cobalt Crystal',
      time: 10,
      cost: 50,
      type: 'crystal',
      requirements: { resources: [], upgrades: {} },
    },
    {
      id: 211,
      name: 'Silver Skull',
      time: 10,
      cost: 50,
      type: 'crystal',
      requirements: { resources: [], upgrades: {} },
    },
  ],
  mine: [
    {
      id: 1,
      lvl: 1,
      cost: 300,
      requirements: { resources: [], orderQty: 0 },
      providedResourceIds: [5],
      expedition: { cost: 100, duration: 15, canBeFoundGoodIds: [200] },
    },
    {
      id: 2,
      lvl: 2,
      cost: 500,
      requirements: {
        resources: [
          { id: 42, qty: 2 },
          { id: 41, qty: 2 },
        ],
        orderQty: 10,
      },
      providedResourceIds: [5, 1],
      expedition: { cost: 100, duration: 15, canBeFoundGoodIds: [200] },
    },
    {
      id: 3,
      lvl: 3,
      cost: 1000,
      requirements: {
        resources: [
          { id: 31, qty: 3 },
          { id: 42, qty: 2 },
        ],
        orderQty: 10,
      },
      providedResourceIds: [5, 1, 2],
      expedition: { cost: 100, duration: 15, canBeFoundGoodIds: [200] },
    },
    {
      id: 4,
      lvl: 4,
      cost: 1500,
      requirements: {
        resources: [
          { id: 31, qty: 3 },
          { id: 32, qty: 2 },
        ],
        orderQty: 10,
      },
      providedResourceIds: [5, 1, 2, 6],
      expedition: { cost: 100, duration: 15, canBeFoundGoodIds: [200] },
    },
    {
      id: 5,
      lvl: 5,
      cost: 2500,
      requirements: {
        resources: [
          { id: 31, qty: 4 },
          { id: 32, qty: 3 },
        ],
        orderQty: 10,
      },
      providedResourceIds: [5, 1, 2, 3, 6],
      expedition: { cost: 120, duration: 20, canBeFoundGoodIds: [200] },
    },
    {
      id: 6,
      lvl: 6,
      cost: 3000,
      requirements: {
        resources: [
          { id: 32, qty: 5 },
          { id: 33, qty: 2 },
        ],
        orderQty: 10,
      },
      providedResourceIds: [5, 1, 2, 3, 6, 7],
      expedition: { cost: 150, duration: 25, canBeFoundGoodIds: [200, 201] },
    },
    {
      id: 7,
      lvl: 7,
      cost: 4000,
      requirements: {
        resources: [
          { id: 33, qty: 2 },
          { id: 34, qty: 2 },
        ],
        orderQty: 10,
      },
      providedResourceIds: [5, 1, 2, 3, 6, 7, 8],
      expedition: { cost: 150, duration: 25, canBeFoundGoodIds: [200, 201] },
    },
    {
      id: 8,
      lvl: 8,
      cost: 5000,
      requirements: {
        resources: [
          { id: 33, qty: 2 },
          { id: 34, qty: 2 },
          { id: 36, qty: 2 },
        ],
        orderQty: 10,
      },
      providedResourceIds: [5, 1, 2, 3, 6, 7, 8, 10],
      expedition: { cost: 150, duration: 25, canBeFoundGoodIds: [200, 201] },
    },
    {
      id: 9,
      lvl: 9,
      cost: 6000,
      requirements: {
        resources: [
          { id: 34, qty: 2 },
          { id: 36, qty: 4 },
        ],
        orderQty: 10,
      },
      providedResourceIds: [5, 1, 2, 3, 6, 7, 8, 10, 11],
      expedition: { cost: 150, duration: 25, canBeFoundGoodIds: [200, 201] },
    },
    {
      id: 10,
      lvl: 10,
      cost: 7000,
      requirements: {
        resources: [
          { id: 34, qty: 2 },
          { id: 36, qty: 4 },
        ],
        orderQty: 10,
      },
      providedResourceIds: [5, 1, 2, 3, 6, 7, 8, 10, 11, 12],
      expedition: { cost: 150, duration: 25, canBeFoundGoodIds: [200, 201] },
    },
  ],
  liberateCities: [
    {
      id: 1,
      name: 'Arkturis',
      resources: [
        { id: 1, qty: 1 },
        { id: 2, qty: 3 },
      ],
      experience: 1000,
    },
    {
      id: 2,
      name: 'Mythradon',
      resources: [
        { id: 1, qty: 1 },
        { id: 2, qty: 3 },
      ],
      experience: 3000,
    },
  ],
  heroLvls: [
    { id: 1, experience: 50 },
    { id: 2, experience: 300 },
    { id: 3, experience: 1000 },
    { id: 4, experience: 1800 },
    { id: 5, experience: 3000 },
    { id: 6, experience: 5000 },
    { id: 7, experience: 8500 },
    { id: 8, experience: 12000 },
    { id: 9, experience: 16000 },
    { id: 10, experience: 21000 },
  ],
  skills: [
    {
      id: 1,
      name: 'Economist',
      levels: [
        {
          level: 1,
          skillId: 1,
          description: 'Increase amount of money from orders by 5%',
          requirements: { money: 500 },
        },
        {
          level: 2,
          skillId: 2,
          description: 'Increase amount of money from orders by 10%',
          requirements: { money: 1000 },
        },
        {
          level: 3,
          skillId: 3,
          description: 'Increase amount of money from orders by 15%',
          requirements: { money: 3000 },
        },
      ],
    },
    {
      id: 2,
      name: 'Salesman',
      levels: [
        {
          level: 1,
          skillId: 4,
          description: 'Increase max number of available customer orders by 1',
          requirements: { money: 500 },
        },
        {
          level: 2,
          skillId: 5,
          description: 'Increase max number of available customer orders by 2',
          requirements: { money: 1000 },
        },
        {
          level: 3,
          skillId: 6,
          description: 'Increase max number of available customer orders by 3',
          requirements: { money: 3000 },
        },
      ],
    },
    {
      id: 3,
      name: 'Gunsmith',
      levels: [
        {
          level: 1,
          skillId: 7,
          description: 'You can create swords, axes',
          requirements: { money: 500 },
        },
        {
          level: 2,
          skillId: 8,
          description: 'You can create bows, hammers and scythes',
          requirements: { money: 1000 },
        },
        {
          level: 3,
          skillId: 9,
          description: 'You can create scepters and wands',
          requirements: { money: 3000 },
        },
      ],
    },
    {
      id: 4,
      name: 'Armor Master',
      levels: [
        {
          level: 1,
          skillId: 10,
          description: 'You can create shields',
          requirements: { money: 500 },
        },
        {
          level: 2,
          skillId: 11,
          description: 'You can create bracers',
          requirements: { money: 1000 },
        },
      ],
    },
    {
      id: 5,
      name: 'Manager',
      levels: [
        {
          level: 1,
          skillId: 12,
          description: 'You can have 4 orders in progress',
          requirements: { money: 500 },
        },
        {
          level: 2,
          skillId: 13,
          description: 'You can have 5 orders in progress',
          requirements: { money: 1000 },
        },
        {
          level: 3,
          skillId: 14,
          description: 'You can have 7 orders in progress',
          requirements: { money: 3000 },
        },
      ],
    },
    {
      id: 6,
      name: 'Exploiter',
      levels: [
        {
          level: 1,
          skillId: 15,
          description: 'You can hire 2 worker',
          requirements: { money: 1500 },
        },
        {
          level: 2,
          skillId: 16,
          description: 'You can hire 3 worker',
          requirements: { money: 3000 },
        },
        {
          level: 3,
          skillId: 17,
          description: 'You can hire 4 worker',
          requirements: { money: 5000 },
        },
      ],
    },
    {
      id: 7,
      name: 'Enchanting Master',
      levels: [
        {
          level: 1,
          skillId: 18,
          description: 'You can enchant things',
          requirements: { money: 6500 },
        },
      ],
    },
  ],
};
