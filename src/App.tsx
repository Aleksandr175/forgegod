import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Panel } from './components/Panel';
import { PanelSelectedGood } from './components/PanelSelectedGood';
import { PanelGoods } from './components/PanelGoods';
import { PanelStorage } from './components/PanelStorage';
import { IStorageGood } from './types';
import { PanelOrders } from './components/PanelOrders';
import { dictionary } from './dictionary';

export const App = () => {
  const [selectedGoodId, setSelectedGoodId] = useState<number>(2);
  const [storage, setStorage] = useState<IStorageGood[]>([
    {
      id: 1,
      qty: 2,
    },
    {
      id: 2,
      qty: 1,
    },
    {
      id: 3,
      qty: 1,
    },
  ]);

  const [orders, setOrders] = useState([
    {
      goodId: 2,
      qty: 1,
      timeLeft: 3, // for 1 qty item
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
          order.timeLeft = order.timeLeft - 1;

          if (order.timeLeft === 0) {
            order.qty = order.qty - 1;

            if (order.qty > 0) {
              order.timeLeft =
                dictionary.goods.find((good) => good.id === order.goodId)
                  ?.time || 0;
            } else {
              addToStorage(order.goodId, 1);
            }
          }

          return order;
        })
        .filter((order) => order.timeLeft > 0);

      return newOrders;
    });
  };

  const createOrder = (id: number, qty: number) => {};

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

  return (
    <View style={styles.appWrapper}>
      <View style={styles.headerBlock}>
        <Text style={styles.header}>Forge God</Text>
      </View>

      <View style={styles.appContent}>
        <View style={styles.forgeBlock}>
          <View style={styles.columnLeft}>
            <PanelOrders orders={orders} />
          </View>
          <View style={styles.columnRight}>
            <View style={styles.orderBlock}>
              <PanelSelectedGood
                goodId={selectedGoodId}
                onCreateOrder={createOrder}
              />
            </View>
            <PanelGoods onChangeGoodId={(id) => setSelectedGoodId(id)} />
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

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    padding: 10,
  },
  headerBlock: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '10%',
  },
  appWrapper: {
    flexDirection: 'column',
    flex: 1,
    width: '100%',
  },
  appContent: {
    height: '80%',
    width: '100%',
    backgroundColor: '#888',
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
    backgroundColor: '#008888',
    width: '50%',
  },
  columnRight: {
    backgroundColor: 'green',
    width: '50%',
  },
  orderBlock: {},
});
