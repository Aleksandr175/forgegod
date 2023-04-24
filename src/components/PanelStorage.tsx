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
import { IStorageGood } from '../types';
import { styles as stylesCommon } from '../styles';

interface IProps {
  storage: IStorageGood[];
}
export const PanelStorage = ({ storage }: IProps) => {
  const availableItems = storage.filter((item) => item.qty > 0);

  return (
    <Panel title={'Storage'}>
      <View style={stylesCommon.storageGrid}>
        <FlatList
          style={stylesCommon.storageGridList}
          data={availableItems}
          numColumns={6}
          renderItem={({ item }) => (
            <View style={stylesCommon.storageGridItem}>
              <Image
                style={stylesCommon.iconBig}
                source={require('../images/' + item.id + '.png')}
              />
              <Text style={stylesCommon.storageGridItemQty}>{item.qty}</Text>
            </View>
          )}
          keyExtractor={(item) => String(item.id)}
        />
      </View>
    </Panel>
  );
};
