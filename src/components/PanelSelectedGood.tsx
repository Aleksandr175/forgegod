import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Panel } from './Panel';
import React from 'react';

export const PanelSelectedGood = () => {
  return (
    <Panel title={'Order'}>
      <View style={styles.selectedItem}>
        <View style={styles.selectedItemImage}>
          <Image style={styles.iconBig} source={require('../images/ore.png')} />
        </View>
        <View style={styles.selectedItemInfo}>
          <Text style={styles.selectedItemTitle}>Ore</Text>
          <Text style={styles.selectedItemTitle}>Required:</Text>
          <View style={styles.selectedItemRequired}>
            <Image
              style={styles.iconSmall}
              source={require('../images/ore.png')}
            />
            <Text>12</Text>
          </View>
          <View style={styles.selectedItemRequired}>
            <Image
              style={styles.iconSmall}
              source={require('../images/ore.png')}
            />
            <Text>12</Text>
          </View>
          <View style={styles.selectedItemRequired}>
            <Image
              style={styles.iconSmall}
              source={require('../images/ore.png')}
            />
            <Text>12</Text>
          </View>
          <View style={styles.separator}></View>
          <Pressable
            style={styles.button}
            onPress={() => {
              alert('button');
            }}
          >
            <Text style={styles.buttonText}>Order</Text>
          </Pressable>
        </View>
      </View>
    </Panel>
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
  storageGridItem: {
    margin: 5,
    backgroundColor: 'blue',
    width: 48,
    height: 48,
  },
  selectedItem: {
    padding: 5,
    backgroundColor: '#D9D9D9',
    flexDirection: 'row',
  },
  selectedItemImage: {
    width: 40,
    height: 40,
    backgroundColor: 'red',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedItemInfo: {},
  selectedItemTitle: {
    color: 'white',
    paddingBottom: 5,
  },
  selectedItemRequired: {
    flexDirection: 'row',
  },
  iconSmall: {
    width: 16,
    height: 16,
  },
  iconBig: {
    width: 32,
    height: 32,
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
