import { FlatList, Text, View } from 'react-native';
import { Panel } from './Panel';
import React from 'react';
import { IStorageGood } from '../types';
import { styles as stylesCommon } from '../styles';
import { CustomImage } from './CustomImage';

interface IProps {
  storage: IStorageGood[];
}

export const PanelStorage = React.memo(({ storage }: IProps) => {
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
              <CustomImage id={item.id} size={'big'} />
              <Text style={stylesCommon.storageGridItemQty}>{item.qty}</Text>
            </View>
          )}
          keyExtractor={(item) => String(item.id)}
        />
      </View>
    </Panel>
  );
});
