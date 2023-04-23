import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Panel } from './components/Panel';
import { PanelSelectedGood } from './components/PanelSelectedGood';
import { PanelGoods } from './components/PanelGoods';
import { PanelStorage } from './components/PanelStorage';
import { IStorageGood } from './types';

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

  return (
    <View style={styles.appWrapper}>
      <View style={styles.headerBlock}>
        <Text style={styles.header}>Forge God</Text>
      </View>

      <View style={styles.appContent}>
        <View style={styles.forgeBlock}>
          <View style={styles.columnLeft}>
            <Panel title={'In Process'}>
              <Text>Left</Text>
            </Panel>
          </View>
          <View style={styles.columnRight}>
            <View style={styles.orderBlock}>
              <PanelSelectedGood goodId={selectedGoodId} />
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
