export interface IDictionary {
  goods: IGood[];
}

export interface IGood {
  id: number;
  name: string;
  time: number;
  cost: number;
  type: TTypeGood;
  requirements: {
    resources: { id: number; qty: number }[];
    upgrades?: {
      minerLvl?: number;
    };
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

export interface IWorker {
  id: number;
  name: string;
  orderId: number | null;
}

export type TSize = 'small' | 'big' | 'superBig';

export type TImage = 'workers';
