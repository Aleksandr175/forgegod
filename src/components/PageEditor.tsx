import React, { useState } from 'react';
import styled from 'styled-components/native';
import { IDictionary, IGood, IGoodInfo } from '../types';
import { CustomImage } from './CustomImage';
import { CustomText } from './CustomText';
import { SQty, SResources, styles as stylesCommon } from '../styles';
import { FlatList, View } from 'react-native';

interface IProps {
  dictionary: IDictionary;
}

export const PageEditor = ({ dictionary }: IProps) => {
  const [data, setData] = useState(dictionary.goods);
  const [selectedGood, setSelectedGood] = useState(data[0]);

  console.log(JSON.stringify(data));

  const updateItem = (item: IGood, field: string, value: number | string) => {
    setData((prevData) => {
      let newData = [...prevData];

      newData = newData.map((item) => {
        if (item.id === selectedGood.id) {
          item[field] = value;
        }

        return item;
      });

      return newData;
    });
  };

  const updateItemRequiredResources = (requiredResources: IGoodInfo[]) => {
    setData((prevData) => {
      let newData = [...prevData];

      newData = newData.map((item) => {
        if (item.id === selectedGood.id) {
          item.requirements.resources = [...requiredResources];
        }

        return item;
      });

      return newData;
    });
  };

  const setRequiredSkill = (skillId: number) => {
    setData((prevData) => {
      let newData = [...prevData];

      newData = newData.map((item) => {
        if (item.id === selectedGood.id) {
          if (!item.requirements.upgrades?.skillIds) {
            item.requirements.upgrades.skillIds = [];
          }

          const index = item.requirements.upgrades.skillIds.findIndex(
            (id) => id === skillId,
          );

          if (index > -1) {
            item.requirements.upgrades.skillIds.splice(index, 1);
          } else {
            item.requirements.upgrades.skillIds.push(skillId);
          }
        }

        return item;
      });

      return newData;
    });
  };

  const isSkillSelected = (skillId: number) => {};

  const getRequirementQty = (goodId: number) => {
    return (
      selectedGood.requirements.resources.find((good) => good.id === goodId)
        ?.qty || 0
    );
  };

  const getTimeForResource = (resourceId: number) => {
    return dictionary.goods.find((good) => good.id === resourceId)?.time || 0;
  };

  const getCostOfResource = (resourceId: number) => {
    return dictionary.goods.find((good) => good.id === resourceId)?.cost || 0;
  };

  const getRequiredResourcesCost = () => {
    return selectedGood.requirements.resources.reduce(
      (partialSum, resource) =>
        partialSum + resource.qty * getCostOfResource(resource.id),
      0,
    );
  };

  const getRequiredResourcesTime = () => {
    return selectedGood.requirements.resources.reduce(
      (partialSum, resource) =>
        partialSum + resource.qty * getTimeForResource(resource.id),
      0,
    );
  };

  return (
    <SPageEditor>
      <SColumnDictionary>
        <FlatList
          style={stylesCommon.gridListFullHeight}
          data={data}
          numColumns={1}
          renderItem={({ item }) => {
            return (
              <SGoodWrapper onPress={() => setSelectedGood(item)}>
                <View>
                  <CustomImage id={item.id} size={'small'} />
                  <CustomText>
                    ID: {item.id}, {item.name}
                  </CustomText>
                </View>
                <View>
                  <CustomText>
                    Cost: {item.cost}, Time: {item.time}
                  </CustomText>
                </View>
                <CustomText>Requirements:</CustomText>
                <SResources>
                  {item.requirements.resources.map((requirement) => {
                    return (
                      <View key={requirement.id}>
                        <CustomImage id={requirement.id} size={'small'} />
                        <SQty>{requirement.qty}</SQty>
                      </View>
                    );
                  })}
                </SResources>
              </SGoodWrapper>
            );
          }}
          keyExtractor={(item) => String(item.id)}
        />
      </SColumnDictionary>
      <SColumnGoods>
        {selectedGood && (
          <View>
            <View>
              <CustomImage id={selectedGood.id} size={'small'} />
              <CustomText>
                ID:
                {selectedGood.id},
                <STextInput
                  onChangeText={(value) => {
                    setSelectedGood((prevState) => {
                      return { ...prevState, name: value };
                    });

                    setData((prevData) => {
                      let newData = [...prevData];

                      newData = newData.map((item) => {
                        if (item.id === selectedGood.id) {
                          item.name = value;
                        }

                        return item;
                      });

                      return newData;
                    });
                  }}
                  value={selectedGood.name}
                />
              </CustomText>
            </View>
            <View>
              <CustomText>
                Cost:{' '}
                <STextInput
                  onChangeText={(value) => {
                    setSelectedGood((prevState) => {
                      return { ...prevState, cost: Number(value) };
                    });

                    updateItem(selectedGood, 'cost', Number(value));
                  }}
                  value={String(selectedGood.cost)}
                />
                , Time:{' '}
                <STextInput
                  onChangeText={(value) => {
                    setSelectedGood((prevState) => {
                      return { ...prevState, time: Number(value) };
                    });

                    updateItem(selectedGood, 'time', Number(value));
                  }}
                  value={String(selectedGood.time)}
                />
              </CustomText>

              <CustomText>
                Resources cost: {getRequiredResourcesCost()}
              </CustomText>
              <CustomText>
                Resources time: {getRequiredResourcesTime()}
              </CustomText>
            </View>

            <View>
              <CustomText>Requirements:</CustomText>

              {dictionary.goods.map((good) => {
                return (
                  <SRequirement key={good.id}>
                    <CustomImage id={good.id} size={'small'} />
                    <STextInput
                      onChangeText={(value) => {
                        setSelectedGood((prevState) => {
                          let requirementResources = [
                            ...selectedGood.requirements.resources,
                          ];

                          let hasUpdated = false;

                          requirementResources = requirementResources.map(
                            (requirementResource) => {
                              if (requirementResource.id === good.id) {
                                requirementResource.qty = Number(value);
                                hasUpdated = true;
                              }

                              return requirementResource;
                            },
                          );

                          if (!hasUpdated) {
                            requirementResources.push({
                              id: good.id,
                              qty: Number(value),
                            });
                          }

                          updateItemRequiredResources(requirementResources);

                          return {
                            ...prevState,
                            requirements: {
                              upgrades: prevState.requirements.upgrades,
                              resources: requirementResources,
                            },
                          };
                        });
                      }}
                      value={String(getRequirementQty(good.id))}
                    ></STextInput>
                  </SRequirement>
                );
              })}
            </View>

            <View>
              <CustomText>Skills:</CustomText>

              {dictionary.skills.map((skill) => {
                return (
                  <SSkillRequirement key={skill.id}>
                    <CustomText>{skill.name}</CustomText>

                    {skill.levels.map((skillLvl) => {
                      return (
                        <SSkill
                          onPress={() => setRequiredSkill(skillLvl.skillId)}
                          selected={(
                            selectedGood.requirements.upgrades.skillIds || []
                          ).includes(skillLvl.skillId)}
                        >
                          <CustomText>
                            {skillLvl.skillId}. {skillLvl.description}
                          </CustomText>
                        </SSkill>
                      );
                    })}
                  </SSkillRequirement>
                );
              })}
            </View>
          </View>
        )}
      </SColumnGoods>
    </SPageEditor>
  );
};

const SPageEditor = styled.View`
  height: 100%;
  width: 100%;
  flex-direction: row;
`;

const SColumnGoods = styled.View`
  width: 50%;
  padding: 10px;
`;
const SColumnDictionary = styled.View`
  width: 50%;
  padding: 10px;
`;

const SResource = styled.View`
  gap: 10px;
  flex-direction: row;
  align-items: center;
  padding-bottom: 5px;
  flex: 1;
`;

const SGoodWrapper = styled.Pressable`
  padding-bottom: 10px;
`;

const STextInput = styled.TextInput`
  background: white;
`;

const SRequirement = styled.View`
  flex-direction: row;
`;

const SSkillRequirement = styled.View`
  padding-bottom: 10px;
`;

const SSkill = styled.Pressable<{ selected?: boolean }>`
  ${({ selected }) => (selected ? 'background: green' : '')}
`;
