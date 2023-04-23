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

interface IProps {
  onChangeGoodId: (goodId: number) => void;
}

export const PanelGoods = ({ onChangeGoodId }: IProps) => {
  const goods = dictionary.goods.filter((item) => {
    // add some conditions, check upgrades
    return item.type === 'good';
  });

  return (
    <Panel title={'Goods'}>
      <View style={stylesCommon.storageGrid}>
        <FlatList
          style={stylesCommon.storageGridGoodsList}
          data={goods}
          numColumns={3}
          renderItem={({ item }) => (
            <Pressable onPress={() => onChangeGoodId(item.id)}>
              <View style={stylesCommon.storageGridItem}>
                <Image
                  style={stylesCommon.iconBig}
                  source={require('../images/' + item.id + '.png')}
                />
              </View>
            </Pressable>
          )}
          keyExtractor={(item) => String(item.id)}
        />
      </View>
    </Panel>
  );
};
