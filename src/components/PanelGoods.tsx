import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Panel } from './Panel';
import React from 'react';

export const PanelGoods = () => {
  return (
    <Panel title={'Goods'}>
      <View style={styles.storageGrid}>
        <FlatList
          style={styles.storageGridGoodsList}
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
          numColumns={3}
          renderItem={({ item }) => (
            <View style={styles.storageGridItem}></View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </Panel>
  );
};

const styles = StyleSheet.create({
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
});
