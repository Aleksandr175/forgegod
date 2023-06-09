import { IGood, IGoodInfo, IMine, IStorageGood } from '../types';
import { dictionary } from '../dictionary';

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

  const hasMoney = money >= mineInfo.cost;

  return hasMoney && hasResources;
};

export const resourceQtyInStorage = (
  goodId: number,
  storage: IStorageGood[],
) => {
  return storage.find((good) => good.id === goodId)?.qty || 0;
};

// Helper function to shuffle an array in-place using Fisher-Yates algorithm
export const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export // Function to retrieve the required resource IDs of a resource (duplicates are possible)
const getRequiredRawResourceIds = (resource: IGood): number[] => {
  const requiredResourceIds = [];

  if (resource.requirements && resource.requirements.resources) {
    const requiredResources = resource.requirements.resources;
    for (const req of requiredResources) {
      const requiredResource = dictionary.goods.find(
        (item) => item.id === req.id,
      );

      if (requiredResource && requiredResource.type === 'resource') {
        requiredResourceIds.push(req.id);
      }

      if (requiredResource) {
        requiredResourceIds.push(
          ...getRequiredRawResourceIds(requiredResource),
        );
      }
    }
  }

  return requiredResourceIds;
};
