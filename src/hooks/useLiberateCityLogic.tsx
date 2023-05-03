import { useState } from 'react';
import { ILiberateCity, IStorageGood } from '../types';
import { hasEnoughResources } from '../utils';

interface IProps {
  storage: IStorageGood[];
  removeFromStorage: (goodId: number, qty: number) => void;
  addExperience: (qty: number) => void;
}
export const useLiberateCityLogic = ({
  storage,
  removeFromStorage,
  addExperience,
}: IProps) => {
  const [liberatedCityIds, setLiberatedCityIds] = useState<number[]>([]);

  const liberateCity = (liberateInfo: ILiberateCity) => {
    if (hasEnoughResources(storage, liberateInfo.resources)) {
      liberateInfo.resources.map((resource) => {
        removeFromStorage(resource.id, resource.qty);
      });

      liberatedCityIds.push(liberateInfo.id);
      addExperience(liberateInfo.experience);
    }
  };

  return {
    liberateCity,
    liberatedCityIds,
  };
};
