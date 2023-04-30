import { ICustomerOrder, IGoodInfo, IMine, IStorageGood } from '../types';

export const randomIntFromInterval = (min: number, max: number) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const hasEnoughResources = (
  resources: IStorageGood[],
  requiredResources: IGoodInfo[],
) => {
  // Convert the resources array into an object
  let resourceObj = {};
  for (let resource of resources) {
    resourceObj[resource.id] = resource.qty;
  }

  // Check if you have enough resources for the order
  for (let good of requiredResources) {
    if (
      !resourceObj.hasOwnProperty(good.id) ||
      resourceObj[good.id] < good.qty
    ) {
      return false;
    }
  }

  return true;
};

export const hasEnoughResourcesToImproveMine = (
  mineInfo: IMine,
  storage: IStorageGood[],
  money: number,
) => {
  const hasResources = hasEnoughResources(
    storage,
    mineInfo.requirements.resources,
  );

  const hasMoney = money >= mineInfo.requirements.money;

  return hasMoney && hasResources;
};

export const resourceQtyInStorage = (
  goodId: number,
  storage: IStorageGood[],
) => {
  return storage.find((good) => good.id === goodId)?.qty || 0;
};
