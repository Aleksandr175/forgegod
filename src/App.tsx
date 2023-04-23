import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Panel } from './components/Panel';
import { PanelSelectedGood } from './components/PanelSelectedGood';
import { PanelGoods } from './components/PanelGoods';
import { PanelStorage } from './components/PanelStorage';

export const App = () => {
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
              <PanelSelectedGood />
            </View>
            <PanelGoods />
          </View>
        </View>

        <View style={styles.storageBlock}>
          <PanelStorage />
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
  },
  appContent: {
    height: '80%',
    width: '100%',
    /*flex: 1,*/
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
  screenContent: {
    flexDirection: 'row',
    width: '100%',
    height: '75%',
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
    backgroundColor: 'blue',
    width: '50%',
  },
  columnRight: {
    backgroundColor: 'green',
    width: '50%',
  },
  orderBlock: {},
  panelOrdersInProcess: {
    backgroundColor: '#444',
  },
  storageGrid: {
    backgroundColor: '#D9D9D9',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  storageGridList: {
    height: 140,
  },
  storageGridGoodsList: {
    height: 240,
  },
  button: {
    backgroundColor: '#444',
  },
  buttonText: {
    textAlign: 'center', // <-- the magic
    color: 'white',
  },
  separator: {
    padding: 5,
  },
  containerWrapper: {
    padding: 5,
    width: '100%',
  },
  containerTitle: {
    backgroundColor: 'yellow',
  },
  container: {
    backgroundColor: '#888',
    width: '100%',
  },
});
