import { ICustomerOrder, IGoodInfo, IStorageGood } from '../types';
import { useEffect, useRef, useState } from 'react';
import { dictionary } from '../dictionary';
import { nanoid } from 'nanoid';
import { hasEnoughResources, randomIntFromInterval } from '../utils';

interface IProps {
  storage: IStorageGood[];
  removeFromStorage: (goodId: number, qty: number) => void;
  addMoney: (amount: number) => void;
  addExperience: (amount: number) => void;
  maxCustomerOrdersQty: number;
  economistBonus: number;
  skillIds: number[];
}

export const useCustomerOrdersLogic = ({
  storage,
  removeFromStorage,
  addMoney,
  addExperience,
  maxCustomerOrdersQty,
  economistBonus,
  skillIds,
}: IProps) => {
  const [customerOrders, setCustomerOrders] = useState<ICustomerOrder[]>([]);

  const customerOrdersRef = useRef(customerOrders);
  const dayTimer = useRef();

  useEffect(() => {
    customerOrdersRef.current = customerOrders;
  }, [customerOrders]);

  useEffect(() => {
    createCustomerOrder(
      [
        { id: 3, qty: 2 },
        { id: 30, qty: 1 },
      ],
      100,
      200,
    );
    createCustomerOrder([{ id: 3, qty: 5 }], 200, 100);
  }, []);

  const completeCustomerOrder = (customerOrderId: string) => {
    const customerOrder = customerOrders.find(
      (order) => order.id === customerOrderId,
    );

    if (customerOrder) {
      if (hasEnoughResources(storage, customerOrder.goods)) {
        // remove resources for order
        customerOrder.goods.forEach((good) => {
          removeFromStorage(good.id, good.qty);
        });

        // add money from order
        addMoney(
          customerOrder.cost + (economistBonus / 100) * customerOrder.cost,
        );

        addExperience(customerOrder.cost / 5);

        removeCustomerOrder(customerOrderId);
      }
    }
  };

  const generateCustomerOrders = () => {
    const possibleGoods = dictionary.goods.filter((item) => {
      // TODO: add some conditions, check upgrades
      let haveSkills = true;
      item.requirements.upgrades.skillIds?.forEach((skillId) => {
        if (!skillIds.includes(skillId)) {
          haveSkills = false;
        }
      });

      // add some conditions, check upgrades
      return item.type === 'good' && haveSkills;
    });

    const qtyTypeOfGoods = randomIntFromInterval(1, 2);
    const goods = [];
    let timeLeft = 0;
    let cost = 0;

    for (let i = 0; i < qtyTypeOfGoods; i++) {
      const randomGoodIndex = randomIntFromInterval(
        0,
        possibleGoods.length - 1,
      );
      const qty = randomIntFromInterval(1, 3);
      const good = possibleGoods[randomGoodIndex];

      goods.push({
        id: possibleGoods[randomGoodIndex].id,
        qty,
      });

      timeLeft += good.time * qty;
      cost += good.cost * qty;
    }

    createCustomerOrder(goods, timeLeft, cost);
  };

  const removeCustomerOrder = (customerOrderId: string) => {
    setCustomerOrders((prevState) => {
      return prevState.filter((order) => order.id !== customerOrderId);
    });
  };

  const createCustomerOrder = (
    goods: IGoodInfo[],
    timeLeft: number,
    cost: number,
  ) => {
    setCustomerOrders((prevOrders) => {
      return [
        ...prevOrders,
        {
          goods,
          timeLeft,
          timeTotal: timeLeft,
          cost,
          id: nanoid(),
          customerId: randomIntFromInterval(1, 4),
        },
      ];
    });
  };

  const updateCustomerOrders = () => {
    setCustomerOrders((prevOrders) => {
      let newOrders = [...prevOrders];

      newOrders = newOrders
        .map((order) => {
          return {
            ...order,
            timeLeft: order.timeLeft - 1,
          };
        })
        .filter((order) => order.timeLeft > 0);

      return newOrders;
    });
  };

  useEffect(() => {
    // @ts-ignore
    dayTimer.current = setInterval(handleDayTimer, 10000);

    return () => {
      clearInterval(dayTimer.current);
    };
  }, []);

  const handleDayTimer = () => {
    if (customerOrdersRef.current.length < maxCustomerOrdersQty) {
      generateCustomerOrders();
    }
  };

  return {
    removeCustomerOrder,
    completeCustomerOrder,
    updateCustomerOrders,
    customerOrders,
  };
};
