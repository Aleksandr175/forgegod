import { FlatList, Pressable, View } from 'react-native';
import { Panel } from './Panel';
import React from 'react';
import { dictionary } from '../dictionary';
import { styles as stylesCommon } from '../styles';
import { CustomImage } from './CustomImage';

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
                <CustomImage id={item.id} size={'big'} />
              </View>
            </Pressable>
          )}
          keyExtractor={(item) => String(item.id)}
        />
      </View>
    </Panel>
  );
};
