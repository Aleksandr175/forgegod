import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Panel } from './components/Panel';
import { PanelSelectedGood } from './components/PanelSelectedGood';
import { PanelGoods } from './components/PanelGoods';
import { PanelStorage } from './components/PanelStorage';
import {
  ICustomerOrder,
  IGoodInfo,
  IOrder,
  IStorageGood,
  IWorker,
} from './types';
import { PanelOrders } from './components/PanelOrders';
import { dictionary } from './dictionary';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { PageMine } from './components/PageMine';
import { useFonts } from 'expo-font';
import { PageOrders } from './components/PageOrders';
import { nanoid } from 'nanoid';
import { CustomText } from './components/CustomText';

export const App = () => {
  const [page, setPage] = useState('orders');
  const [mineLvl, setMineLvl] = useState(1);
  const [money, setMoney] = useState(1000);
  const [maxOrders, setMaxOrders] = useState(5);

  const [loaded] = useFonts({
    LGGothic: require('./fonts/LGGothic.ttf'),
  });

  const [selectedGoodId, setSelectedGoodId] = useState<number>(2);
  const [storage, setStorage] = useState<IStorageGood[]>([
    {
      id: 1,
      qty: 20,
    },
    {
      id: 2,
      qty: 10,
    },
    {
      id: 3,
      qty: 5,
    },
    {
      id: 11,
      qty: 1,
    },
    {
      id: 12,
      qty: 2,
    },
    {
      id: 13,
      qty: 1,
    },
    {
      id: 30,
      qty: 1,
    },
    {
      id: 31,
      qty: 1,
    },
    {
      id: 32,
      qty: 1,
    },
    {
      id: 33,
      qty: 1,
    },
    {
      id: 34,
      qty: 1,
    },
    {
      id: 35,
      qty: 1,
    },
    {
      id: 36,
      qty: 1,
    },
    {
      id: 37,
      qty: 1,
    },
    {
      id: 38,
      qty: 1,
    },
    {
      id: 39,
      qty: 1,
    },
  ]);

  const orderId = useRef(1);

  const [orders, setOrders] = useState<IOrder[]>([]);
  const [customerOrders, setCustomerOrders] = useState<ICustomerOrder[]>([]);

  useEffect(() => {
    createOrder(2, 10);
    createOrder(3, 2);
    createOrder(3, 1);
    createOrder(3, 1);
    createOrder(3, 1);
    createOrder(3, 1);
    createOrder(3, 1);
    createOrder(3, 1);
    createOrder(3, 1);
    createOrder(3, 1);
    createOrder(3, 1);
    createOrder(3, 1);
    createOrder(3, 1);

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

  useEffect(() => {
    const workerIds = orders
      .filter((order) => order.workerId)
      .map((order) => order.workerId);
    const ordersWithoutWorker = orders.filter((order) => !order.workerId);

    const restedWorkerIds = workers
      .filter((worker) => !workerIds.includes(worker.id))
      .map((worker) => worker.id);

    if (ordersWithoutWorker.length && restedWorkerIds) {
      setOrders((prevOrders) => {
        return [...prevOrders].map((order) => {
          if (!order.workerId && restedWorkerIds.length) {
            order.workerId = restedWorkerIds.shift();
          }

          return order;
        });
      });
    }
  }, [orders.length]);

  const [workers, setWorkers] = useState<IWorker[]>([
    {
      id: 1,
      name: 'You',
      orderId: null,
    },
    {
      id: 2,
      name: 'Worker',
      orderId: null,
    },
    {
      id: 3,
      name: 'Worker2',
      orderId: null,
    },
  ]);

  const timer = useRef();

  useEffect(() => {
    // @ts-ignore
    timer.current = setInterval(handleTimer, 1000);

    return () => {
      clearInterval(timer.current);
    };
  }, []);

  const handleTimer = () => {
    setOrders((prevOrders) => {
      let newOrders = [...prevOrders];

      newOrders = newOrders
        .map((order) => {
          if (order.workerId) {
            order.timeLeft = order.timeLeft - 1;

            if (order.timeLeft === 0) {
              order.qty = order.qty - 1;

              if (order.qty > 0) {
                order.timeLeft =
                  dictionary.goods.find((good) => good.id === order.goodId)
                    ?.time || 0;
              }

              addToStorage(order.goodId, 1);
            }
          }

          return order;
        })
        .filter((order) => order.timeLeft > 0);

      return newOrders;
    });

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

  const createOrder = (id: number, qty: number) => {
    const item = dictionary.goods.find((good) => good.id === id);

    if (item) {
      setOrders((prevOrders) => {
        orderId.current += 1;

        return [
          ...prevOrders,
          {
            goodId: id,
            qty,
            timeLeft: item.time,
            timePerItem: item.time,
            orderId: orderId.current,
            workerId: null,
          },
        ];
      });

      setStorage((prevStorage) => {
        const newStorage = [...prevStorage];

        item.requirements.resources.forEach((requiredResource) => {
          const indexInStorage = storage.findIndex(
            (item) => item.id === requiredResource.id,
          );

          newStorage[indexInStorage].qty -= requiredResource.qty;
        });

        return newStorage;
      });
    }
  };

  const randomIntFromInterval = (min: number, max: number) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
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

  const addToStorage = (goodId: number, qty: number) => {
    setStorage((prevStorage) => {
      let newStorage = [...prevStorage];
      const index = newStorage.findIndex(
        (storageItem) => storageItem.id === goodId,
      );

      if (index > -1) {
        // update qty
        newStorage[index].qty += qty;
      } else {
        // add new storage item
        newStorage.push({
          id: goodId,
          qty: qty,
        });
      }

      return newStorage;
    });
  };

  const removeFromStorage = (goodId: number, qty: number) => {
    setStorage((prevStorage) => {
      let newStorage = [...prevStorage];
      const index = newStorage.findIndex(
        (storageItem) => storageItem.id === goodId,
      );

      if (index > -1) {
        // update qty
        newStorage[index].qty -= qty;

        if (newStorage[index].qty < 0) {
          newStorage[index].qty = 0;
        }
      } else {
        // add new storage item
        newStorage.push({
          id: goodId,
          qty: qty,
        });
      }

      return newStorage;
    });
  };

  const onChangeGoodId = useCallback((id: number) => setSelectedGoodId(id), []);
  const onCreateOrder = useCallback(createOrder, []);

  const onBuyGood = (goodId: number, qty: number) => {
    const item = dictionary.goods.find((good) => good.id === goodId)!;
    const needMoney = item.cost * qty;

    if (money >= needMoney) {
      setMoney((prevMoney) => {
        return prevMoney - needMoney;
      });

      addToStorage(goodId, qty);
    }
  };

  const completeCustomerOrder = (customerOrderId: string) => {
    const customerOrder = customerOrders.find(
      (order) => order.id === customerOrderId,
    );

    if (customerOrder) {
      if (hasEnoughResourcesForCustomerOrder(storage, customerOrder)) {
        // remove resources for order
        customerOrder.goods.forEach((good) => {
          removeFromStorage(good.id, good.qty);
        });

        // add money from order
        setMoney((prevState) => {
          return prevState + customerOrder.cost;
        });

        removeCustomerOrder(customerOrderId);
      }
    }
  };

  const removeCustomerOrder = (customerOrderId: string) => {
    setCustomerOrders((prevState) => {
      return prevState.filter((order) => order.id !== customerOrderId);
    });
  };

  const hasEnoughResourcesForCustomerOrder = (
    resources: IStorageGood[],
    customerOrder: ICustomerOrder,
  ) => {
    if (customerOrder) {
      // Convert the resources array into an object
      let resourceObj = {};
      for (let resource of storage) {
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

  // TODO: refactor code, separate to hooks

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.appWrapper}>
      <StatusBar style="auto" />

      <SHeaderBlock>
        <SSomePoint></SSomePoint>
        <SHeader>Forge God</SHeader>
        <SMoneyWrapper>
          <SImage source={require('./images/gold.png')} />
          <SMoney>{money}</SMoney>
        </SMoneyWrapper>
      </SHeaderBlock>

      <View style={styles.appContent}>
        {page === 'main' && (
          <>
            <View style={styles.forgeBlock}>
              <View style={styles.columnLeft}>
                <PanelOrders orders={orders} maxOrders={maxOrders} />
              </View>
              <View style={styles.columnRight}>
                <View style={styles.orderBlock}>
                  <PanelSelectedGood
                    storage={storage}
                    goodId={selectedGoodId}
                    onCreateOrder={onCreateOrder}
                  />
                </View>
                <PanelGoods onChangeGoodId={onChangeGoodId} />
              </View>
            </View>

            <PanelStorage storage={storage} />
          </>
        )}

        {page === 'mine' && (
          <PageMine
            dictionary={dictionary.mine}
            lvl={mineLvl}
            onBuyGood={onBuyGood}
          />
        )}

        {page === 'orders' && (
          <PageOrders
            dictionary={dictionary.mine}
            storage={storage}
            orders={customerOrders}
            onCompleteOrder={(orderId: string) => {
              completeCustomerOrder(orderId);
            }}
          />
        )}
      </View>

      <View style={styles.bottomMenu}>
        <Pressable
          style={styles.menuItem}
          onPress={() => {
            setPage('main');
          }}
        >
          <Text>Forge</Text>
        </Pressable>
        <Pressable
          style={styles.menuItem}
          onPress={() => {
            setPage('skills');
          }}
        >
          <Text>Skills</Text>
        </Pressable>
        <Pressable
          style={styles.menuItem}
          onPress={() => {
            setPage('mine');
          }}
        >
          <Text>Mine</Text>
        </Pressable>
        <Pressable
          style={styles.menuItem}
          onPress={() => {
            setPage('orders');
          }}
        >
          <Text>Orders</Text>
        </Pressable>
      </View>
    </View>
  );
};

const SImage = styled.Image`
  height: 16px;
  width: 16px;
`;

const SSomePoint = styled.View`
  width: 80px;
`;

const SHeader = styled.Text`
  font-weight: 700;
  padding: 10px;
  color: white;
  font-family: 'LGGothic';
  font-size: 18px;
`;

const SMoneyWrapper = styled.View`
  width: 100px;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const SMoney = styled(CustomText)`
  color: yellow;
  font-size: 18px;
`;

const SHeaderBlock = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  height: 10%;
`;

const styles = StyleSheet.create({
  appWrapper: {
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    backgroundColor: '#614D41',
  },
  appContent: {
    height: '80%',
    width: '100%',
    backgroundColor: '#967766',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomMenu: {
    width: '100%',
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 30,
    flexDirection: 'row',
    height: '10%',
  },
  menuItem: {
    width: '25%',
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'green',
  },
  forgeBlock: {
    flexDirection: 'row',
    width: '100%',
    height: '75%',
    alignItems: 'stretch',
  },
  storageBlock: {
    height: '25%',
    width: '100%',
  },
  columnLeft: {
    width: '50%',
  },
  columnRight: {
    width: '50%',
  },
  orderBlock: {},
});
