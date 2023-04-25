import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Panel } from './components/Panel';
import { PanelSelectedGood } from './components/PanelSelectedGood';
import { PanelGoods } from './components/PanelGoods';
import { PanelStorage } from './components/PanelStorage';
import { IOrder, IStorageGood, IWorker } from './types';
import { PanelOrders } from './components/PanelOrders';
import { dictionary } from './dictionary';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';

export const App = () => {
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
  ]);

  const orderId = useRef(1);

  const [orders, setOrders] = useState<IOrder[]>([]);

  useEffect(() => {
    createOrder(2, 3);
    createOrder(3, 2);
    createOrder(3, 1);
    createOrder(3, 1);
  }, []);

  useEffect(() => {
    const workerIds = orders
      .filter((order) => order.workerId)
      .map((order) => order.workerId);
    const ordersWithoutWorker = orders.filter((order) => !order.workerId);

    const restedWorkerIds = workers
      .filter((worker) => !workerIds.includes(worker.id))
      .map((worker) => worker.id);

    console.log('restedWorkerIds', restedWorkerIds);

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

  const addToStorage = (goodId: number, qty: number) => {
    setStorage((prevStorage) => {
      let newStorage = [...prevStorage];
      const index = newStorage.findIndex(
        (storageItem) => storageItem.id === goodId,
      );

      if (index > -1) {
        // update qty
        newStorage[index].qty += 1;
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

  return (
    <View style={styles.appWrapper}>
      <StatusBar style="auto" />

      <SHeaderBlock>
        <SHeader>Forge God</SHeader>
      </SHeaderBlock>

      <View style={styles.appContent}>
        <View style={styles.forgeBlock}>
          <View style={styles.columnLeft}>
            <PanelOrders orders={orders} />
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

        <View style={styles.storageBlock}>
          <PanelStorage storage={storage} />
        </View>
      </View>

      <View style={styles.bottomMenu}>
        <Pressable
          style={styles.menuItem}
          onPress={() => {
            alert('1');
          }}
        >
          <Text>Forge</Text>
        </Pressable>
        <Pressable
          style={styles.menuItem}
          onPress={() => {
            alert('1');
          }}
        >
          <Text>Skills</Text>
        </Pressable>
        <Pressable
          style={styles.menuItem}
          onPress={() => {
            alert('1');
          }}
        >
          <Text>Mine</Text>
        </Pressable>
        <Pressable
          style={styles.menuItem}
          onPress={() => {
            alert('1');
          }}
        >
          <Text>Orders</Text>
        </Pressable>
      </View>
    </View>
  );
};

const SHeader = styled.Text`
  font-weight: 700;
  padding: 10px;
  color: white;
`;

const SHeaderBlock = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
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
