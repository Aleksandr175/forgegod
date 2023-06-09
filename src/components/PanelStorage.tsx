import { FlatList, Text, View } from 'react-native';
import { Panel } from './Panel';
import React from 'react';
import { IStorageGood } from '../types';
import { SStorageGrid, styles as stylesCommon } from '../styles';
import { CustomImage } from './CustomImage';
import { CustomText } from './CustomText';

interface IProps {
  storage: IStorageGood[];
}

export const PanelStorage = React.memo(({ storage }: IProps) => {
  const availableItems = storage.filter((item) => item.qty > 0);

  return (
    <Panel title={'Storage'} height={200}>
      <SStorageGrid>
        <FlatList
          style={stylesCommon.storageGridList}
          data={availableItems}
          numColumns={6}
          renderItem={({ item }) => (
            <View style={stylesCommon.storageGridItem}>
              <CustomImage id={item.id} size={'big'} />
              <CustomText style={stylesCommon.storageGridItemQty}>
                {item.qty}
              </CustomText>
            </View>
          )}
          keyExtractor={(item) => String(item.id)}
        />
      </SStorageGrid>
    </Panel>
  );
});
