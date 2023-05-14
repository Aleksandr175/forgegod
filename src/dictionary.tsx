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
      time: 2,
      cost: 3,
      type: 'resource',
      requirements: { resources: [], upgrades: {} },
    },
    {
      id: 2,
      name: 'Blue Ore',
      time: 5,
      cost: 7,
      type: 'good',
      requirements: { resources: [{ id: 1, qty: 2 }], upgrades: {} },
    },
    {
      id: 3,
      name: 'Blue Powder',
      time: 10,
      cost: 16,
      type: 'good',
      requirements: { resources: [{ id: 2, qty: 2 }], upgrades: {} },
    },
    {
      id: 4,
      name: 'Blue Ingot',
      time: 15,
      cost: 34,
      type: 'good',
      requirements: {
        resources: [
          { id: 3, qty: 1 },
          { id: 2, qty: 2 },
        ],
        upgrades: {},
      },
    },
    {
      id: 5,
      name: 'Wood',
      time: 1,
      cost: 2,
      type: 'good',
      requirements: { resources: [], upgrades: {} },
    },
    {
      id: 6,
      name: 'Row Bronze Ore',
      time: 2,
      cost: 4,
      type: 'resource',
      requirements: { resources: [], upgrades: {} },
    },
    {
      id: 7,
      name: 'Bronze Ore',
      time: 5,
      cost: 9,
      type: 'good',
      requirements: { resources: [{ id: 6, qty: 2 }], upgrades: {} },
    },
    {
      id: 8,
      name: 'Bronze Powder',
      time: 12,
      cost: 21,
      type: 'good',
      requirements: { resources: [{ id: 7, qty: 2 }], upgrades: {} },
    },
    {
      id: 9,
      name: 'Bronze Ingot',
      time: 18,
      cost: 45,
      type: 'good',
      requirements: {
        resources: [
          { id: 7, qty: 2 },
          { id: 8, qty: 1 },
        ],
        upgrades: {},
      },
    },
    {
      id: 10,
      name: 'Row Bronze Ore',
      time: 2,
      cost: 3,
      type: 'resource',
      requirements: { resources: [], upgrades: {} },
    },
    {
      id: 11,
      name: 'Bronze Ore',
      time: 3,
      cost: 7,
      type: 'good',
      requirements: { resources: [{ id: 10, qty: 2 }], upgrades: {} },
    },
    {
      id: 12,
      name: 'Bronze Powder',
      time: 5,
      cost: 10,
      type: 'good',
      requirements: { resources: [{ id: 11, qty: 2 }], upgrades: {} },
    },
    {
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
    },
    {
      id: 18,
      name: 'Bronze Ingot',
      time: 10,
      cost: 25,
      type: 'good',
      requirements: { resources: [], upgrades: {} },
    },
    {
      id: 19,
      name: 'Bronze Ingot',
      time: 10,
      cost: 25,
      type: 'good',
      requirements: { resources: [{ id: 18, qty: 2 }], upgrades: {} },
    },
    {
      id: 20,
      name: 'Bronze Ingot',
      time: 10,
      cost: 25,
      type: 'good',
      requirements: { resources: [{ id: 19, qty: 2 }], upgrades: {} },
    },
    {
      id: 21,
      name: 'Bronze Ingot',
      time: 10,
      cost: 25,
      type: 'good',
      requirements: {
        resources: [
          { id: 20, qty: 1 },
          { id: 19, qty: 2 },
        ],
        upgrades: {},
      },
    },
    {
      id: 22,
      name: 'Bronze Ingot',
      time: 10,
      cost: 25,
      type: 'good',
      requirements: { resources: [], upgrades: {} },
    },
    {
      id: 23,
      name: 'Bronze Ingot',
      time: 10,
      cost: 25,
      type: 'good',
      requirements: { resources: [{ id: 22, qty: 2 }], upgrades: {} },
    },
    {
      id: 24,
      name: 'Bronze Ingot',
      time: 10,
      cost: 25,
      type: 'good',
      requirements: { resources: [{ id: 23, qty: 2 }], upgrades: {} },
    },
    {
      id: 25,
      name: 'Bronze Ingot',
      time: 10,
      cost: 25,
      type: 'good',
      requirements: {
        resources: [
          { id: 24, qty: 1 },
          { id: 23, qty: 2 },
        ],
        upgrades: {},
      },
    },
    {
      id: 26,
      name: 'Bronze Ingot',
      time: 10,
      cost: 25,
      type: 'good',
      requirements: { resources: [], upgrades: {} },
    },
    {
      id: 27,
      name: 'Bronze Ingot',
      time: 10,
      cost: 25,
      type: 'good',
      requirements: { resources: [{ id: 26, qty: 2 }], upgrades: {} },
    },
    {
      id: 28,
      name: 'Bronze Ingot',
      time: 10,
      cost: 25,
      type: 'good',
      requirements: { resources: [{ id: 27, qty: 2 }], upgrades: {} },
    },
    {
      id: 29,
      name: 'Bronze Ingot',
      time: 10,
      cost: 25,
      type: 'good',
      requirements: {
        resources: [
          { id: 28, qty: 1 },
          { id: 27, qty: 2 },
        ],
        upgrades: {},
      },
    },
    {
      id: 30,
      name: 'Knife',
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
    },
    {
      id: 31,
      name: 'Long Sword',
      time: 20,
      cost: 65,
      type: 'good',
      requirements: {
        resources: [
          { id: 2, qty: 4 },
          { id: 4, qty: 1 },
        ],
        upgrades: { skillIds: [7] },
      },
    },
    {
      id: 32,
      name: 'Axe',
      time: 30,
      cost: 80,
      type: 'good',
      requirements: {
        resources: [{ id: 4, qty: 2 }],
        upgrades: { skillIds: [7] },
      },
    },
    {
      id: 33,
      name: 'Bronze Bow',
      time: 25,
      cost: 55,
      type: 'good',
      requirements: {
        resources: [
          { id: 7, qty: 1 },
          { id: 9, qty: 1 },
        ],
        upgrades: { skillIds: [8] },
      },
    },
    {
      id: 34,
      name: 'Bronze Axe',
      time: 40,
      cost: 125,
      type: 'good',
      requirements: {
        resources: [
          { id: 9, qty: 2 },
          { id: 7, qty: 2 },
        ],
        upgrades: { skillIds: [7] },
      },
    },
    {
      id: 35,
      name: 'Bronze Bracers',
      time: 40,
      cost: 130,
      type: 'good',
      requirements: {
        resources: [
          { id: 8, qty: 1 },
          { id: 9, qty: 2 },
        ],
        upgrades: { skillIds: [11] },
      },
    },
    {
      id: 36,
      name: 'Bronze Shield',
      time: 35,
      cost: 100,
      type: 'good',
      requirements: {
        resources: [
          { id: 4, qty: 1 },
          { id: 9, qty: 1 },
        ],
        upgrades: { skillIds: [10] },
      },
    },
    {
      id: 37,
      name: 'Bronze Scepter',
      time: 75,
      cost: 205,
      type: 'good',
      requirements: {
        resources: [
          { id: 8, qty: 2 },
          { id: 9, qty: 3 },
        ],
        upgrades: { skillIds: [9] },
      },
    },
    {
      id: 38,
      name: 'Scythe',
      time: 45,
      cost: 125,
      type: 'good',
      requirements: {
        resources: [{ id: 4, qty: 3 }],
        upgrades: { skillIds: [8] },
      },
    },
    {
      id: 39,
      name: 'Bronze Wand',
      time: 65,
      cost: 175,
      type: 'good',
      requirements: {
        resources: [
          { id: 8, qty: 4 },
          { id: 9, qty: 1 },
        ],
        upgrades: { skillIds: [9] },
      },
    },
    {
      id: 41,
      name: 'Wooden Sword',
      time: 3,
      cost: 7,
      type: 'good',
      requirements: {
        resources: [{ id: 5, qty: 3 }],
        upgrades: { skillIds: [] },
      },
    },
    {
      id: 42,
      name: 'Wooden Axe',
      time: 4,
      cost: 10,
      type: 'good',
      requirements: {
        resources: [{ id: 5, qty: 4 }],
        upgrades: { skillIds: [7] },
      },
    },
    {
      id: 43,
      name: 'Wooden Bow',
      time: 9,
      cost: 16,
      type: 'good',
      requirements: {
        resources: [
          { id: 5, qty: 4 },
          { id: 2, qty: 1 },
        ],
        upgrades: { skillIds: [8] },
      },
    },
    {
      id: 44,
      name: 'Wooden Hammer',
      time: 10,
      cost: 18,
      type: 'good',
      requirements: {
        resources: [
          { id: 5, qty: 3 },
          { id: 1, qty: 2 },
        ],
        upgrades: { skillIds: [8] },
      },
    },
    {
      id: 46,
      name: 'Wooden Shield',
      time: 6,
      cost: 15,
      type: 'good',
      requirements: {
        resources: [
          { id: 1, qty: 2 },
          { id: 5, qty: 2 },
        ],
        upgrades: { skillIds: [10] },
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
  // goods2: GOODS,
  mine: [
    {
      id: 1,
      lvl: 1,
      cost: 500,
      requirements: {
        resources: [],
        orderQty: 0,
      },
      newProvidedResourceIds: [6],
      providedResourceIds: [6],
      expedition: {
        cost: 100,
        duration: 10,
        canBeFoundGoods: [
          {
            id: 200,
            qty: 1,
          },
          {
            id: 201,
            qty: 1,
          },
        ],
      },
    },
    {
      id: 2,
      lvl: 2,
      cost: 1000,
      requirements: {
        resources: [
          { id: 2, qty: 20 },
          { id: 3, qty: 20 },
          { id: 4, qty: 20 },
        ],
        orderQty: 10,
      },
      newProvidedResourceIds: [10],
      providedResourceIds: [6, 10],
      expedition: {
        cost: 100,
        duration: 15,
        canBeFoundGoods: [
          {
            id: 200,
            qty: 2,
          },
          {
            id: 201,
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
  /*experienceLevels: [
    50, 300, 1000, 1800, 3000, 5000, 8500, 12000, 16000, 21500, 27000, 34000,
    42000, 50000, 60000, 74000, 91000, 110000, 130000, 160000,
  ],*/
  heroLvls: [
    {
      id: 1,
      experience: 50,
    },
    {
      id: 2,
      experience: 300,
    },
    {
      id: 3,
      experience: 1000,
    },
    {
      id: 4,
      experience: 1800,
    },
    {
      id: 5,
      experience: 3000,
    },
    {
      id: 6,
      experience: 5000,
    },
    {
      id: 7,
      experience: 8500,
    },
    {
      id: 8,
      experience: 12000,
    },
    {
      id: 9,
      experience: 16000,
    },
    {
      id: 10,
      experience: 21000,
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
          description: 'Increase max number of available customer orders by 1',
          requirements: {
            money: 500,
          },
        },
        {
          level: 2,
          skillId: 5,
          description: 'Increase max number of available customer orders by 2',
          requirements: {
            money: 1000,
          },
        },
        {
          level: 3,
          skillId: 6,
          description: 'Increase max number of available customer orders by 3',
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
          description: 'You can create swords, axes',
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
    {
      id: 7,
      name: 'Enchanting Master',
      levels: [
        {
          level: 1,
          skillId: 18,
          description: 'You can enchant things',
          requirements: {
            money: 6500,
          },
        },
      ],
    },
  ],
};
