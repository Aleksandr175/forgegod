import React, { useState } from 'react';
import styled from 'styled-components/native';
import { IDictionary, IGood, IGoodInfo, IMine, TTab } from '../types';
import { CustomImage } from './CustomImage';
import { CustomText } from './CustomText';
import { SQty, SResources, styles as stylesCommon } from '../styles';
import { FlatList, Pressable, ScrollView, View } from 'react-native';

interface IProps {
  dictionary: IDictionary;
}

export const PageEditor = ({ dictionary }: IProps) => {
  const [data, setData] = useState(dictionary);
  const [selectedGood, setSelectedGood] = useState(data.goods[0]);
  const [selectedMine, setSelectedMine] = useState(data.mine[0]);
  const [tab, setTab] = useState<TTab>('goods');

  console.log(JSON.stringify(data));

  const updateItem = (item: IGood, field: string, value: number | string) => {
    setData((prevData) => {
      let newData = { ...prevData };

      newData.goods = newData.goods.map((item) => {
        if (item.id === selectedGood.id) {
          item[field] = value;
        }

        return item;
      });

      return newData;
    });
  };

  const updateItemRequiredResources = (requiredResources: IGoodInfo[]) => {
    let processedRequiredResources = [...requiredResources].filter(
      (resource) => {
        return resource.qty > 0;
      },
    );

    setData((prevData) => {
      let newData = { ...prevData };

      newData.goods = newData.goods.map((item) => {
        if (item.id === selectedGood.id) {
          item.requirements.resources = [...processedRequiredResources];
        }

        return item;
      });

      return newData;
    });
  };

  const updateItemRequiredMineResources = (requiredResources: IGoodInfo[]) => {
    let processedRequiredResources = [...requiredResources].filter(
      (resource) => {
        return resource.qty > 0;
      },
    );

    setData((prevData) => {
      let newData = { ...prevData };

      newData.mine = newData.mine.map((item) => {
        if (item.id === selectedMine.id) {
          item.requirements.resources = [...processedRequiredResources];
        }

        console.log(item.requirements.resources);

        return item;
      });

      return newData;
    });
  };

  const setRequiredSkill = (skillId: number) => {
    setData((prevData) => {
      let newData = { ...prevData };

      newData.goods = newData.goods.map((item) => {
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

  const getRequirementQty = (goodId: number) => {
    return (
      selectedGood.requirements.resources.find((good) => good.id === goodId)
        ?.qty || ''
    );
  };

  const getRequirementMineQty = (goodId: number) => {
    return (
      selectedMine.requirements.resources.find((good) => good.id === goodId)
        ?.qty || ''
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

  const updateMineItem = (
    item: IMine,
    field: string,
    value: number | string,
  ) => {
    setData((prevData) => {
      let newData = { ...prevData };

      newData.mine = newData.mine.map((item) => {
        if (item.id === selectedMine.id) {
          item[field] = value;
        }

        return item;
      });

      return newData;
    });
  };

  return (
    <SPageEditor>
      <View style={{ flexDirection: 'row' }}>
        <Pressable onPress={() => setTab('goods')}>
          <CustomText>Goods</CustomText>
        </Pressable>
        <Pressable onPress={() => setTab('mine')}>
          <CustomText>Mine</CustomText>
        </Pressable>
        <Pressable onPress={() => setTab('cities')}>
          <CustomText>Cities</CustomText>
        </Pressable>
      </View>

      <SPageContent>
        {tab === 'goods' && (
          <>
            <SColumnDictionary>
              <FlatList
                style={stylesCommon.gridListFullHeight}
                data={data.goods}
                numColumns={5}
                renderItem={({ item }) => {
                  return (
                    <SGoodWrapper
                      onPress={() => setSelectedGood(item)}
                      selected={selectedGood.id === item.id}
                    >
                      <View>
                        <CustomImage id={item.id} size={'big'} />
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
              <ScrollView>
                {selectedGood && (
                  <View>
                    <View>
                      <CustomImage id={selectedGood.id} size={'big'} />
                      <CustomText>
                        ID:
                        {selectedGood.id},
                        <STextInput
                          onChangeText={(value) => {
                            setSelectedGood((prevState) => {
                              return { ...prevState, name: value };
                            });

                            setData((prevData) => {
                              let newData = { ...prevData };

                              newData.goods = newData.goods.map((item) => {
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

                      <FlatList
                        style={stylesCommon.gridListFullHeight}
                        data={dictionary.goods}
                        numColumns={3}
                        renderItem={({ item }) => {
                          return (
                            <SRequirement key={item.id}>
                              <CustomImage id={item.id} size={'big'} />
                              <STextInput
                                onChangeText={(value) => {
                                  setSelectedGood((prevState) => {
                                    let requirementResources = [
                                      ...selectedGood.requirements.resources,
                                    ];

                                    let hasUpdated = false;

                                    requirementResources =
                                      requirementResources.map(
                                        (requirementResource) => {
                                          if (
                                            requirementResource.id === item.id
                                          ) {
                                            requirementResource.qty =
                                              Number(value);
                                            hasUpdated = true;
                                          }

                                          return requirementResource;
                                        },
                                      );

                                    if (!hasUpdated) {
                                      requirementResources.push({
                                        id: item.id,
                                        qty: Number(value),
                                      });
                                    }

                                    updateItemRequiredResources(
                                      requirementResources,
                                    );

                                    return {
                                      ...prevState,
                                      requirements: {
                                        ...prevState.requirements,
                                        resources: requirementResources,
                                      },
                                    };
                                  });
                                }}
                                value={String(getRequirementQty(item.id))}
                              ></STextInput>
                            </SRequirement>
                          );
                        }}
                        keyExtractor={(item) => String(item.id)}
                      />
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
                                  onPress={() =>
                                    setRequiredSkill(skillLvl.skillId)
                                  }
                                  selected={(
                                    selectedGood.requirements.upgrades
                                      .skillIds || []
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
              </ScrollView>
            </SColumnGoods>
          </>
        )}

        {tab === 'mine' && (
          <>
            <SColumnDictionary>
              <FlatList
                style={stylesCommon.gridListFullHeight}
                data={data.mine}
                numColumns={3}
                renderItem={({ item }) => {
                  return (
                    <SGoodWrapper
                      onPress={() => setSelectedMine(item)}
                      selected={selectedMine.id === item.id}
                    >
                      <View>
                        <CustomText>
                          ID: {item.id}, Lvl: {item.lvl}
                        </CustomText>
                      </View>
                      <View>
                        <CustomText>Cost: {item.cost}</CustomText>
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
              <ScrollView>
                {selectedMine && (
                  <View>
                    <View>
                      <CustomText>
                        ID:
                        {selectedMine.id}, Lvl:{' '}
                        <STextInput
                          onChangeText={(value) => {
                            setSelectedGood((prevState) => {
                              return { ...prevState, lvl: value };
                            });

                            setData((prevData) => {
                              let newData = { ...prevData };

                              newData.mine = newData.mine.map((item) => {
                                if (item.id === selectedGood.id) {
                                  item.lvl = Number(value);
                                }

                                return item;
                              });

                              return newData;
                            });
                          }}
                          value={String(selectedMine.lvl)}
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

                            updateMineItem(selectedMine, 'cost', Number(value));
                          }}
                          value={String(selectedMine.cost)}
                        />
                      </CustomText>
                    </View>

                    <View>
                      <CustomText>Requirements:</CustomText>

                      <FlatList
                        style={stylesCommon.gridListFullHeight}
                        data={dictionary.goods}
                        numColumns={3}
                        renderItem={({ item }) => {
                          return (
                            <SRequirement key={item.id}>
                              <CustomImage id={item.id} size={'big'} />
                              <STextInput
                                onChangeText={(value) => {
                                  setSelectedMine((prevState) => {
                                    let requirementResources = [
                                      ...selectedMine.requirements.resources,
                                    ];

                                    let hasUpdated = false;

                                    requirementResources =
                                      requirementResources.map(
                                        (requirementResource) => {
                                          if (
                                            requirementResource.id === item.id
                                          ) {
                                            requirementResource.qty =
                                              Number(value);
                                            hasUpdated = true;
                                          }

                                          return requirementResource;
                                        },
                                      );

                                    if (!hasUpdated) {
                                      requirementResources.push({
                                        id: item.id,
                                        qty: Number(value),
                                      });
                                    }

                                    updateItemRequiredMineResources(
                                      requirementResources,
                                    );

                                    return {
                                      ...prevState,
                                      requirements: {
                                        ...prevState.requirements,
                                        resources: requirementResources,
                                      },
                                    };
                                  });
                                }}
                                value={String(getRequirementMineQty(item.id))}
                              ></STextInput>
                            </SRequirement>
                          );
                        }}
                        keyExtractor={(item) => String(item.id)}
                      />
                    </View>
                  </View>
                )}
              </ScrollView>
            </SColumnGoods>
          </>
        )}

        {/*{tab === 'cities' && (
        <>
          <SColumnDictionary>
            <FlatList
              style={stylesCommon.gridListFullHeight}
              data={data}
              numColumns={5}
              renderItem={({ item }) => {
                return (
                  <SGoodWrapper
                    onPress={() => setSelectedGood(item)}
                    selected={selectedGood.id === item.id}
                  >
                    <View>
                      <CustomImage id={item.id} size={'big'} />
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
            <ScrollView>
              {selectedGood && (
                <View>
                  <View>
                    <CustomImage id={selectedGood.id} size={'big'} />
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

                    <FlatList
                      style={stylesCommon.gridListFullHeight}
                      data={dictionary.goods}
                      numColumns={3}
                      renderItem={({ item }) => {
                        return (
                          <SRequirement key={item.id}>
                            <CustomImage id={item.id} size={'big'} />
                            <STextInput
                              onChangeText={(value) => {
                                setSelectedGood((prevState) => {
                                  let requirementResources = [
                                    ...selectedGood.requirements.resources,
                                  ];

                                  let hasUpdated = false;

                                  requirementResources =
                                    requirementResources.map(
                                      (requirementResource) => {
                                        if (
                                          requirementResource.id === item.id
                                        ) {
                                          requirementResource.qty =
                                            Number(value);
                                          hasUpdated = true;
                                        }

                                        return requirementResource;
                                      },
                                    );

                                  if (!hasUpdated) {
                                    requirementResources.push({
                                      id: item.id,
                                      qty: Number(value),
                                    });
                                  }

                                  updateItemRequiredResources(
                                    requirementResources,
                                  );

                                  return {
                                    ...prevState,
                                    requirements: {
                                      upgrades: prevState.requirements.upgrades,
                                      resources: requirementResources,
                                    },
                                  };
                                });
                              }}
                              value={String(getRequirementQty(item.id))}
                            ></STextInput>
                          </SRequirement>
                        );
                      }}
                      keyExtractor={(item) => String(item.id)}
                    />
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
                                onPress={() =>
                                  setRequiredSkill(skillLvl.skillId)
                                }
                                selected={(
                                  selectedGood.requirements.upgrades.skillIds ||
                                  []
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
            </ScrollView>
          </SColumnGoods>
        </>
      )}*/}
      </SPageContent>
    </SPageEditor>
  );
};

const SPageEditor = styled.View`
  height: 100%;
  width: 100%;
`;

const SPageContent = styled.View`
  height: 100%;
  width: 100%;
  flex-direction: row;
`;

const SColumnGoods = styled.View`
  width: 50%;
  padding: 10px 10px 50px;
  height: 800px;
`;
const SColumnDictionary = styled.View`
  width: 50%;
  height: 800px;
  padding: 10px 10px 50px;
`;

const SResource = styled.View`
  gap: 10px;
  flex-direction: row;
  align-items: center;
  padding-bottom: 5px;
  flex: 1;
`;

const SGoodWrapper = styled.Pressable<{ selected?: boolean }>`
  padding-bottom: 30px;
  padding-right: 20px;

  ${({ selected }) => (selected ? 'background: green' : '')}
`;

const STextInput = styled.TextInput`
  background: white;
`;

const SRequirement = styled.View`
  flex-direction: row;
  padding-right: 10px;
`;

const SSkillRequirement = styled.View`
  padding-bottom: 10px;
`;

const SSkill = styled.Pressable<{ selected?: boolean }>`
  ${({ selected }) => (selected ? 'background: green' : '')}
`;
