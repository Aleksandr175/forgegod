import { FlatList } from 'react-native';
import { Panel } from './Panel';
import React from 'react';
import {
  SGridItem,
  SStorageGrid,
  styles as stylesCommon,
} from '../styles';
import { CustomImage } from './CustomImage';
import { dictionary } from '../dictionary';
import { IMine } from '../types';

interface IProps {
  onBuyGood: (goodId: number, qty: number) => void;
  currentMineLvlInfo: IMine;
}

export const PanelShop = React.memo(
  ({ onBuyGood, currentMineLvlInfo }: IProps) => {
    const availableResourceIds = currentMineLvlInfo.providedResourceIds;

    const resources = dictionary.goods.filter((item) => {
      // add some conditions, check upgrades
      return availableResourceIds.includes(item.id);
    });

    return (
      <Panel title={'Shop'}>
        <SStorageGrid>
          <FlatList
            style={stylesCommon.storageGridList}
            data={resources}
            numColumns={6}
            renderItem={({ item }) => (
              <SGridItem onPress={() => onBuyGood(item.id, 1)}>
                <CustomImage id={item.id} size={'big'} />
              </SGridItem>
            )}
            keyExtractor={(item) => String(item.id)}
          />
        </SStorageGrid>
      </Panel>
    );
  },
);
