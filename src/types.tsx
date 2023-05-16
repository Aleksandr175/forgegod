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
    upgrades: {
      minerLvl?: number;
      skillIds?: number[];
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
  id: number;
  lvl: number;
  cost: number;
  requirements: {
    resources: IGoodInfo[];
    orderQty?: number;
  };
  providedResourceIds: number[];
  expedition: {
    cost: number;
    duration: number;
    canBeFoundGoodIds: number[];
  };
}

export type TTypeGood = 'resource' | 'good' | 'crystal';

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
  | 'editor'
  | string;

export interface IExpeditionInfoInProcess {
  duration: number;
  mineLvl: number;
  canBeFoundGoodIds: number[];
}

export type TTab = 'goods' | 'mine' | 'cities';
