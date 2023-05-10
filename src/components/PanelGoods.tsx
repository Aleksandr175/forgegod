import { FlatList, Pressable, View } from 'react-native';
import { Panel } from './Panel';
import React from 'react';
import { dictionary } from '../dictionary';
import { SGridWrapper, styles, styles as stylesCommon } from '../styles';
import { CustomImage } from './CustomImage';

interface IProps {
  onChangeGoodId: (goodId: number) => void;
  selectedGoodId: number | null;
  skillIds: number[];
}

export const PanelGoods = React.memo(
  ({ onChangeGoodId, selectedGoodId, skillIds }: IProps) => {
    const goods = dictionary.goods.filter((item) => {
      let haveSkills = true;
      item.requirements.upgrades.skillIds?.forEach((skillId) => {
        if (!skillIds.includes(skillId)) {
          haveSkills = false;
        }
      });

      // add some conditions, check upgrades
      return item.type === 'good' && haveSkills;
    });

    return (
      <Panel title={'Goods'}>
        <SGridWrapper>
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
        </SGridWrapper>
      </Panel>
    );
  },
);
