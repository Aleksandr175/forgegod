import { ICustomerOrder, IStorageGood } from '../types';

export const randomIntFromInterval = (min: number, max: number) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const hasEnoughResourcesForCustomerOrder = (
  resources: IStorageGood[],
  customerOrder: ICustomerOrder,
) => {
  if (customerOrder) {
    // Convert the resources array into an object
    let resourceObj = {};
    for (let resource of resources) {
      resourceObj[resource.id] = resource.qty;
    }

    // Check if you have enough resources for the order
    for (let good of customerOrder.goods) {
      if (
        !resourceObj.hasOwnProperty(good.id) ||
        resourceObj[good.id] < good.qty
      ) {
        return false;
      }
    }

    return true;
  }
};
