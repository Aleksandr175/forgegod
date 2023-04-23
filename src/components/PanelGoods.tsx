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
import { dictionary } from '../dictionary';
import { styles as stylesCommon } from '../styles';

export const PanelGoods = () => {
  const goods = dictionary.goods.filter((item) => {
    // add some conditions, check upgrades
    return item.type === 'good';
  });

  return (
    <Panel title={'Goods'}>
      <View style={styles.storageGrid}>
        <FlatList
          style={styles.storageGridGoodsList}
          data={goods}
          numColumns={3}
          renderItem={({ item }) => (
            <View style={styles.storageGridItem}>
              <Image
                style={stylesCommon.iconBig}
                source={require('../images/' + item.id + '.png')}
              />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </Panel>
  );
};

const styles = StyleSheet.create({
  storageGrid: {
    backgroundColor: '#614D41',
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
    backgroundColor: '#71635B',
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'black',
  },
});
