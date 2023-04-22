import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

export const App = () => {
  return (
    <>
      <View>
        <Text style={styles.header}>Open123 app!</Text>
      </View>
      <StatusBar style="auto" />

      <View style={styles.appContent}>
        <View style={styles.screenContent}>
          <View style={styles.columnLeft}>
            <View style={styles.containerWrapper}>
              <View style={styles.containerTitle}>
                <Text>In Process</Text>
              </View>
              <View style={styles.container}>
                <Text>Left</Text>
              </View>
            </View>
          </View>
          <View style={styles.columnRight}>
            <View style={styles.containerWrapper}>
              <View style={styles.containerTitle}>
                <Text>Order</Text>
              </View>
              <View style={styles.container}>
                <View style={styles.selectedItem}>
                  <View style={styles.selectedItemImage}></View>
                  <View style={styles.selectedItemInfo}>
                    <Text style={styles.selectedItemTitle}>Ore</Text>
                    <Text style={styles.selectedItemTitle}>Required:</Text>
                    <View style={styles.selectedItemRequired}>
                      <Image
                        style={styles.iconSmall}
                        source={require('./images/ore.png')}
                      />
                      <Text>12</Text>
                    </View>
                    <View style={styles.selectedItemRequired}>
                      <Image
                        style={styles.iconSmall}
                        source={require('./images/ore.png')}
                      />
                      <Text>12</Text>
                    </View>
                    <View style={styles.selectedItemRequired}>
                      <Image
                        style={styles.iconSmall}
                        source={require('./images/ore.png')}
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
              </View>
            </View>
            <View style={styles.containerWrapper}>
              <View style={styles.containerTitle}>
                <Text>Goods</Text>
              </View>
              <View style={styles.container}>
                <View style={styles.storageGrid}>
                  <View style={styles.storageGridItem}></View>
                  <View style={styles.storageGridItem}></View>
                  <View style={styles.storageGridItem}></View>
                  <View style={styles.storageGridItem}></View>
                  <View style={styles.storageGridItem}></View>
                  <View style={styles.storageGridItem}></View>
                  <View style={styles.storageGridItem}></View>
                  <View style={styles.storageGridItem}></View>
                  <View style={styles.storageGridItem}></View>
                  <View style={styles.storageGridItem}></View>
                  <View style={styles.storageGridItem}></View>
                  <View style={styles.storageGridItem}></View>
                  <View style={styles.storageGridItem}></View>
                  <View style={styles.storageGridItem}></View>
                  <View style={styles.storageGridItem}></View>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.containerWrapper}>
          <View style={styles.containerTitle}>
            <Text>Storage</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.storageGrid}>
              <FlatList
                style={styles.storageGridList}
                data={[
                  { id: 1 },
                  { id: 1 },
                  { id: 1 },
                  { id: 1 },
                  { id: 1 },
                  { id: 1 },
                  { id: 1 },
                  { id: 1 },
                  { id: 1 },
                  { id: 1 },
                  { id: 1 },
                  { id: 1 },
                  { id: 1 },
                  { id: 1 },
                  { id: 1 },
                  { id: 1 },
                  { id: 1 },
                  { id: 1 },
                  { id: 1 },
                  { id: 1 },
                  { id: 1 },
                  { id: 1 },
                  { id: 1 },
                  { id: 1 },
                  { id: 1 },
                  { id: 1 },
                  { id: 1 },
                  { id: 1 },
                  { id: 1 },
                  { id: 1 },
                  { id: 1 },
                  { id: 1 },
                  { id: 1 },
                  { id: 1 },
                  { id: 1 },
                  { id: 1 },
                ]}
                numColumns={6}
                renderItem={({ item }) => (
                  <View style={styles.storageGridItem}></View>
                )}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottomMenu}>
        <Pressable
          style={styles.menuItem}
          onPress={() => {
            alert('1');
          }}
        >
          <Text>Menu1</Text>
        </Pressable>
        <Pressable
          style={styles.menuItem}
          onPress={() => {
            alert('1');
          }}
        >
          <Text>Menu2</Text>
        </Pressable>
        <Pressable
          style={styles.menuItem}
          onPress={() => {
            alert('1');
          }}
        >
          <Text>Menu3</Text>
        </Pressable>
        <Pressable
          style={styles.menuItem}
          onPress={() => {
            alert('1');
          }}
        >
          <Text>Menu4</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    padding: 10,
  },
  appContent: {
    width: '100%',
    flex: 1,
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
  columnLeft: {
    backgroundColor: 'blue',
    width: '50%',
  },
  columnRight: {
    backgroundColor: 'green',
    width: '50%',
  },
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
    margin: 5,
  },
  containerTitle: {
    backgroundColor: 'yellow',
  },
  container: {
    backgroundColor: '#888',
    width: '100%',
  },
});
