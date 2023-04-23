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
