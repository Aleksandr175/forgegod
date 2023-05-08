export interface IDictionary {
  goods: IGood[];
  mine: IMine[];
  liberateCities: ILiberateCity[];
  heroLvls: IHeroLvl[];
  skills: ISkill[];
}

export interface IHeroLvl {
  id: number;
  experience: number;
}

export interface ISkill {
  id: number;
  name: string;
  levels: ISkillLvl[];
}

export interface ISkillLvl {
  level: number;
  skillId: number;
  description: string;
  requirements: {
    money: number;
  };
}

export interface IGood {
  id: number;
  name: string;
  time: number;
  cost: number;
  type: TTypeGood;
  requirements: {
    resources: IGoodInfo[];
    upgrades?: {
      minerLvl?: number;
    };
  };
}

export interface ILiberateCity {
  id: number;
  name: string;
  resources: IGoodInfo[];
  experience: number;
}

export interface IMine {
  nextLvl: number;
  requirements: {
    resources: IGoodInfo[];
    upgrades?: {
      minerLvl?: number;
    };
    money: number;
    orderQty?: number;
  };
  provideResourceIds: number[];
  expedition: {
    cost: number;
    duration: number;
    canBeFoundGoods: IStorageGood[];
  };
}

export type TTypeGood = 'resource' | 'good';

export interface IStorageGood {
  id: number;
  qty: number;
}

export interface IOrder {
  goodId: number;
  qty: number;
  timeLeft: number;
  timePerItem: number;
  orderId: number;
  workerId: number | null;
}

export interface ICustomerOrder {
  goods: IGoodInfo[];
  timeLeft: number;
  timeTotal: number;
  id: string;
  cost: number;
  customerId: number;
}

export interface IWorker {
  id: number;
  name: string;
  orderId: number | null;
}

export type TSize = 'small' | 'big' | 'superBig';

export type TImage = 'workers' | 'customers';

export interface IGoodInfo {
  id: number;
  qty: number;
}

export type TPage =
  | 'forge'
  | 'orders'
  | 'city'
  | 'hero'
  | 'mine'
  | 'city-1'
  | 'city-2'
  | 'city-3'
  | string;

export interface IExpeditionInfoInProcess {
  duration: number;
  mineLvl: number;
  canBeFoundGoods: IStorageGood[];
}
