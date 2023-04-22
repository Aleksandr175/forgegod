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

      <View style={styles.gameContent}>
        <View>
          <Text>Content</Text>
        </View>
        <View style={styles.bottomMenu}>
          <Pressable
            style={styles.menuItem}
            onPress={() => {
              alert('1');
            }}
          >
            <Text>Menu</Text>
          </Pressable>
          <Pressable
            style={styles.menuItem}
            onPress={() => {
              alert('1');
            }}
          >
            <Text>Menu</Text>
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
  gameContent: {
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
    justifyContent: 'flex-start',
    padding: 30,
  },
  menuItem: {
    backgroundColor: 'green',
  },
});
