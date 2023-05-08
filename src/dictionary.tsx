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
  goods: GOODS,
  mine: [
    {
      nextLvl: 2,
      requirements: {
        resources: [
          { id: 1, qty: 1 },
          { id: 2, qty: 1 },
        ],
        upgrades: {},
        money: 500,
        orderQty: 0,
      },
      provideResourceIds: [3],
      expedition: {
        cost: 100,
        duration: 10,
        canBeFoundGoods: [
          {
            id: 100,
            qty: 1,
          },
          {
            id: 101,
            qty: 1,
          },
        ],
      },
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
        money: 1000,
        orderQty: 10,
      },
      provideResourceIds: [3, 4],
      expedition: {
        cost: 100,
        duration: 15,
        canBeFoundGoods: [
          {
            id: 150,
            qty: 2,
          },
          {
            id: 101,
            qty: 1,
          },
        ],
      },
    },
  ],
  liberateCities: [
    {
      id: 1,
      name: 'Arkturis',
      resources: [
        {
          id: 1,
          qty: 1,
        },
        {
          id: 2,
          qty: 3,
        },
      ],
      experience: 1000,
    },
    {
      id: 2,
      name: 'Mythradon',
      resources: [
        {
          id: 1,
          qty: 1,
        },
        {
          id: 2,
          qty: 3,
        },
      ],
      experience: 3000,
    },
  ],
  heroLvls: [
    {
      id: 1,
      experience: 1000,
    },
    {
      id: 2,
      experience: 2000,
    },
    {
      id: 3,
      experience: 3000,
    },
    {
      id: 4,
      experience: 5000,
    },
    {
      id: 5,
      experience: 8000,
    },
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
          requirements: {
            money: 500,
          },
        },
        {
          level: 2,
          skillId: 2,
          description: 'Increase amount of money from orders by 10%',
          requirements: {
            money: 1000,
          },
        },
        {
          level: 3,
          skillId: 3,
          description: 'Increase amount of money from orders by 15%',
          requirements: {
            money: 3000,
          },
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
          description: 'Increase size of order by 1',
          requirements: {
            money: 500,
          },
        },
        {
          level: 2,
          skillId: 5,
          description: 'Increase size of order by 2',
          requirements: {
            money: 1000,
          },
        },
        {
          level: 3,
          skillId: 6,
          description: 'Increase size of order by 3',
          requirements: {
            money: 3000,
          },
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
          description: 'You can create swords, axes and knives',
          requirements: {
            money: 500,
          },
        },
        {
          level: 2,
          skillId: 8,
          description: 'You can create bows, hammers and scythes',
          requirements: {
            money: 1000,
          },
        },
        {
          level: 3,
          skillId: 9,
          description: 'You can create scepters and wands',
          requirements: {
            money: 3000,
          },
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
          requirements: {
            money: 500,
          },
        },
        {
          level: 2,
          skillId: 11,
          description: 'You can create bracers',
          requirements: {
            money: 1000,
          },
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
          requirements: {
            money: 500,
          },
        },
        {
          level: 2,
          skillId: 13,
          description: 'You can have 5 orders in progress',
          requirements: {
            money: 1000,
          },
        },
        {
          level: 3,
          skillId: 14,
          description: 'You can have 7 orders in progress',
          requirements: {
            money: 3000,
          },
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
          requirements: {
            money: 1500,
          },
        },
        {
          level: 2,
          skillId: 16,
          description: 'You can hire 3 worker',
          requirements: {
            money: 3000,
          },
        },
        {
          level: 3,
          skillId: 17,
          description: 'You can hire 4 worker',
          requirements: {
            money: 5000,
          },
        },
      ],
    },
  ],
};
