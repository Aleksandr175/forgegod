import { Pressable, StyleSheet, Text, View } from 'react-native';
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
            <Text>Left</Text>
          </View>
          <View style={styles.columnRight}>
            <Text>Right</Text>
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
  },
  columnLeft: {
    backgroundColor: 'blue',
    width: '50%',
  },
  columnRight: {
    backgroundColor: 'yellow',
    width: 100,
  },
});
