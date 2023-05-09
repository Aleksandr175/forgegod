import { FlatList, Pressable, View } from 'react-native';
import { Panel } from './Panel';
import React from 'react';
import { dictionary } from '../dictionary';
import { styles, styles as stylesCommon } from '../styles';
import { CustomImage } from './CustomImage';
import styled from 'styled-components/native';

interface IProps {
  onChangeGoodId: (goodId: number) => void;
  selectedGoodId: number | null;
}

export const PanelGoods = React.memo(
  ({ onChangeGoodId, selectedGoodId }: IProps) => {
    const goods = dictionary.goods.filter((item) => {
      // add some conditions, check upgrades
      return item.type === 'good';
    });

    return (
      <Panel title={'Goods'}>
        <SStorageGrid>
          <FlatList
            style={stylesCommon.storageGridGoodsList}
            data={goods}
            numColumns={3}
            renderItem={({ item }) => (
              <Pressable onPress={() => onChangeGoodId(item.id)}>
                <View
                  style={
                    item.id === selectedGoodId
                      ? [
                          styles.storageGridItem,
                          stylesCommon.storageGridItemSelected,
                        ]
                      : styles.storageGridItem
                  }
                >
                  <CustomImage id={item.id} size={'big'} />
                </View>
              </Pressable>
            )}
            keyExtractor={(item) => String(item.id)}
          />
        </SStorageGrid>
      </Panel>
    );
  },
);

const SStorageGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;
