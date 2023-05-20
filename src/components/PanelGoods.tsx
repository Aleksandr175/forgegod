import { FlatList, Pressable, View } from 'react-native';
import { Panel } from './Panel';
import React from 'react';
import { dictionary } from '../dictionary';
import { SGridWrapper, styles, styles as stylesCommon } from '../styles';
import { CustomImage } from './CustomImage';
import { IGood } from '../types';

interface IProps {
  onChangeGoodId: (goodId: number) => void;
  selectedGoodId: number | null;
  skillIds: number[];
  mineLvl: number;
}

export const PanelGoods = React.memo(
  ({ onChangeGoodId, selectedGoodId, skillIds, mineLvl }: IProps) => {
    // Function to retrieve the required resource IDs of a resource (duplicates are possible)
    const getRequiredRawResourceIds = (resource: IGood): number[] => {
      const requiredResourceIds = [];

      if (resource.requirements && resource.requirements.resources) {
        const requiredResources = resource.requirements.resources;
        for (const req of requiredResources) {
          const requiredResource = dictionary.goods.find(
            (item) => item.id === req.id,
          );

          if (requiredResource && requiredResource.type === 'resource') {
            requiredResourceIds.push(req.id);
          }

          if (requiredResource) {
            requiredResourceIds.push(
              ...getRequiredRawResourceIds(requiredResource),
            );
          }
        }
      }

      return requiredResourceIds;
    };

    const goods = dictionary.goods.filter((item) => {
      let haveSkills = true;
      let areAllRequiredRawResourcesOpened = true;
      item.requirements.upgrades.skillIds?.forEach((skillId) => {
        if (!skillIds.includes(skillId)) {
          haveSkills = false;
        }
      });

      // get all raw resources for good
      const requiredRawResourceIds = getRequiredRawResourceIds(item);
      const mine = dictionary.mine.find((m) => m.lvl === mineLvl);

      if (mine) {
        requiredRawResourceIds.forEach((rawResourceId) => {
          if (!mine.providedResourceIds.includes(rawResourceId)) {
            areAllRequiredRawResourcesOpened = false;
          }
        });
      }

      return (
        item.type === 'good' && haveSkills && areAllRequiredRawResourcesOpened
      );
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
