import React, { useState } from 'react';
import styled from 'styled-components/native';
import {
  IDictionary,
  IGood,
  IGoodInfo,
  ILiberateCity,
  IMine,
  TTab,
} from '../types';
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
  const [selectedCity, setSelectedCity] = useState(data.liberateCities[0]);
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

  const updateCityRequiredResources = (requiredResources: IGoodInfo[]) => {
    let processedRequiredResources = [...requiredResources].filter(
      (resource) => {
        return resource.qty > 0;
      },
    );

    setData((prevData) => {
      let newData = { ...prevData };

      newData.liberateCities = newData.liberateCities.map((item) => {
        if (item.id === selectedCity.id) {
          item.resources = [...processedRequiredResources];
        }

        console.log(item.resources);

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

  const getRequiredCityQty = (goodId: number) => {
    return selectedCity.resources.find((good) => good.id === goodId)?.qty || '';
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

  const getRequiredResourcesCost = (resources: IGoodInfo[]) => {
    return resources.reduce(
      (partialSum, resource) =>
        partialSum + resource.qty * getCostOfResource(resource.id),
      0,
    );
  };

  const getCityRequiredResourcesTime = () => {
    return selectedCity.resources.reduce(
      (partialSum, resource) =>
        partialSum + resource.qty * getTimeForResource(resource.id),
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

  // Function to calculate the time for a resource
  const getFullResourcesTime = (resource: IGood): number => {
    // Recursive case: Calculate the cumulative time for required resources
    let cumulativeTime = resource.time;

    const requiredResources = resource.requirements.resources;
    for (const req of requiredResources) {
      const requiredResource = dictionary.goods.find(
        (item) => item.id === req.id,
      );
      if (requiredResource) {
        cumulativeTime += req.qty * getFullResourcesTime(requiredResource);
      }
    }

    return cumulativeTime;
  };

  const getAllRawResourcesCost = (resource: IGood): number => {
    // Base case: If no requirements, return the resource's own time
    if (!resource.requirements || !resource.requirements.resources) {
      return resource.additionalCost;
    }

    // Recursive case: Calculate the cumulative time for required resources
    let cumulativeCost = 0;

    const requiredResources = resource.requirements.resources;
    for (const req of requiredResources) {
      const requiredResource = dictionary.goods.find(
        (item) => item.id === req.id,
      );
      if (requiredResource) {
        cumulativeCost += req.qty * getAllRawResourcesCost(requiredResource);
      }
    }

    return cumulativeCost;
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

  const updateItemProvidedMineResources = (providedResourcesId: number[]) => {
    setData((prevData) => {
      let newData = { ...prevData };

      newData.mine = newData.mine.map((item) => {
        if (item.id === selectedMine.id) {
          item.providedResourceIds = providedResourcesId;
        }

        return item;
      });

      return newData;
    });
  };

  const addNewCity = () => {
    setData((prevData) => {
      let newData = { ...prevData };

      newData.liberateCities.push(
        JSON.parse(
          JSON.stringify(
            newData.liberateCities[newData.liberateCities.length - 1],
          ),
        ),
      );

      newData.liberateCities[newData.liberateCities.length - 1] = {
        ...newData.liberateCities[newData.liberateCities.length - 1],
        id: newData.liberateCities[newData.liberateCities.length - 1].id + 1,
      };

      return newData;
    });
  };

  const addNewMineLvl = () => {
    setData((prevData) => {
      let newData = { ...prevData };

      newData.mine.push(
        JSON.parse(JSON.stringify(newData.mine[newData.mine.length - 1])),
      );

      newData.mine[newData.mine.length - 1] = {
        ...newData.mine[newData.mine.length - 1],
        id: newData.mine[newData.mine.length - 1].id + 1,
        lvl: newData.mine[newData.mine.length - 1].lvl + 1,
      };

      return newData;
    });
  };

  // Function to calculate the time needed for a liberateCity
  function calculateLiberateCityTime(liberateCity: ILiberateCity) {
    let totalTime = 0;

    if (liberateCity.resources) {
      const requiredResources = liberateCity.resources;
      for (const req of requiredResources) {
        const requiredResource = dictionary.goods.find(
          (item) => item.id === req.id,
        );
        if (requiredResource) {
          totalTime += req.qty * getFullResourcesTime(requiredResource);
        }
      }
    }

    return totalTime;
  }

  const getAllCitiesCost = () => {
    let cost = 0;
    dictionary.liberateCities.forEach((city) => {
      city.resources.forEach((resource) => {
        const requiredResource = dictionary.goods.find(
          (item) => item.id === resource.id,
        );

        if (requiredResource) {
          cost = cost + resource.qty * getAllRawResourcesCost(requiredResource);
        }
      });
    });

    return cost;
  };

  const getAllCitiesTime = () => {
    let time = 0;
    dictionary.liberateCities.forEach((city) => {
      time = time + calculateLiberateCityTime(city);
    });

    return time;
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
                          Add. Cost: {item.additionalCost}
                        </CustomText>
                        <CustomText>
                          Cost: {item.cost}, Time: {item.time}.
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
                    <View style={{ flexDirection: 'row' }}>
                      <SColumn>
                        <CustomText>Total Cost: {selectedGood.cost}</CustomText>
                        <CustomText>
                          Additional Cost:{' '}
                          <STextInput
                            onChangeText={(value) => {
                              const additionalCost = Number(value);
                              const resourcesCost = getRequiredResourcesCost(
                                selectedGood.requirements.resources,
                              );

                              setSelectedGood((prevState) => {
                                return {
                                  ...prevState,
                                  additionalCost,
                                  cost: additionalCost + resourcesCost,
                                };
                              });

                              updateItem(
                                selectedGood,
                                'cost',
                                additionalCost + resourcesCost,
                              );
                              updateItem(
                                selectedGood,
                                'resourcesCost',
                                resourcesCost,
                              );
                              updateItem(
                                selectedGood,
                                'additionalCost',
                                additionalCost,
                              );
                            }}
                            value={String(selectedGood.additionalCost || 0)}
                          />
                        </CustomText>

                        <CustomText>
                          Row Resources cost:{' '}
                          {getRequiredResourcesCost(
                            selectedGood.requirements.resources,
                          )}
                        </CustomText>
                      </SColumn>

                      <SColumn>
                        <CustomText>Time:</CustomText>
                        <STextInput
                          onChangeText={(value) => {
                            setSelectedGood((prevState) => {
                              return { ...prevState, time: Number(value) };
                            });

                            updateItem(selectedGood, 'time', Number(value));
                          }}
                          value={String(selectedGood.time)}
                        />

                        <CustomText>
                          Raw resources time + production:{' '}
                          {getFullResourcesTime(selectedGood)}
                        </CustomText>

                        <CustomText>
                          Resources time: {getRequiredResourcesTime()}
                        </CustomText>
                      </SColumn>
                    </View>

                    <View style={{ paddingTop: 10 }}>
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
              <Pressable onPress={addNewMineLvl}>
                <CustomText>Add new lvl</CustomText>
              </Pressable>
              <FlatList
                style={stylesCommon.gridListFullHeight}
                data={data.mine}
                numColumns={3}
                renderItem={({ item }) => {
                  return (
                    <SMineGoodWrapper
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
                      <SResourcesMines>
                        {item.requirements.resources.map((requirement) => {
                          return (
                            <View key={requirement.id}>
                              <CustomImage id={requirement.id} size={'small'} />
                              <SQty>{requirement.qty}</SQty>
                            </View>
                          );
                        })}
                      </SResourcesMines>

                      <CustomText>Provide resources:</CustomText>
                      <SResourcesMines>
                        {item.providedResourceIds.map((id) => {
                          return (
                            <View key={id}>
                              <CustomImage id={id} size={'small'} />
                            </View>
                          );
                        })}
                      </SResourcesMines>
                    </SMineGoodWrapper>
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
                      <CustomText>Provides resources:</CustomText>

                      <FlatList
                        style={stylesCommon.gridListFullHeight}
                        data={dictionary.goods}
                        numColumns={15}
                        renderItem={({ item }) => {
                          return (
                            <SRequirement key={item.id}>
                              <SProvidedResource
                                onPress={() => {
                                  setSelectedMine((prevState) => {
                                    const newData = { ...prevState };

                                    if (
                                      newData.providedResourceIds.includes(
                                        item.id,
                                      )
                                    ) {
                                      newData.providedResourceIds.splice(
                                        newData.providedResourceIds.findIndex(
                                          (id) => id === item.id,
                                        ),
                                        1,
                                      );
                                    } else {
                                      newData.providedResourceIds.push(item.id);
                                    }

                                    updateItemProvidedMineResources(
                                      newData.providedResourceIds,
                                    );

                                    return newData;
                                  });
                                }}
                                selected={selectedMine.providedResourceIds.includes(
                                  item.id,
                                )}
                              >
                                <CustomImage id={item.id} size={'big'} />
                              </SProvidedResource>
                            </SRequirement>
                          );
                        }}
                        keyExtractor={(item) => String(item.id)}
                      />
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

                    <View>
                      <CustomText>
                        Provides resources from Expeditions:
                      </CustomText>
                      <FlatList
                        style={stylesCommon.gridListFullHeight}
                        data={dictionary.goods}
                        numColumns={15}
                        renderItem={({ item }) => {
                          return (
                            <SRequirement key={item.id}>
                              <SProvidedResource
                                onPress={() => {
                                  setSelectedMine((prevState) => {
                                    const newData = { ...prevState };

                                    if (
                                      newData.expedition.canBeFoundGoodIds.includes(
                                        item.id,
                                      )
                                    ) {
                                      newData.expedition.canBeFoundGoodIds.splice(
                                        newData.expedition.canBeFoundGoodIds.findIndex(
                                          (id) => id === item.id,
                                        ),
                                        1,
                                      );
                                    } else {
                                      newData.expedition.canBeFoundGoodIds.push(
                                        item.id,
                                      );
                                    }

                                    return newData;
                                  });
                                }}
                                selected={selectedMine.expedition.canBeFoundGoodIds.includes(
                                  item.id,
                                )}
                              >
                                <CustomImage id={item.id} size={'big'} />
                              </SProvidedResource>
                            </SRequirement>
                          );
                        }}
                        keyExtractor={(item) => String(item.id)}
                      />
                      <CustomText>
                        Expedition Cost:{' '}
                        <STextInput
                          onChangeText={(value) => {
                            setSelectedMine((prevState) => {
                              const newData = { ...prevState };

                              newData.expedition.cost = Number(value);

                              return newData;
                            });
                          }}
                          value={String(selectedMine.expedition.cost)}
                        />
                      </CustomText>
                      <CustomText>
                        Expedition Duration (in sec):{' '}
                        <STextInput
                          onChangeText={(value) => {
                            setSelectedMine((prevState) => {
                              const newData = { ...prevState };

                              newData.expedition.duration = Number(value);

                              return newData;
                            });
                          }}
                          value={String(selectedMine.expedition.duration)}
                        />
                      </CustomText>{' '}
                    </View>
                  </View>
                )}
              </ScrollView>
            </SColumnGoods>
          </>
        )}

        {tab === 'cities' && (
          <>
            <SColumnDictionary>
              <Pressable onPress={addNewCity}>
                <CustomText>Add new city</CustomText>
              </Pressable>
              <CustomText>All cities cost: {getAllCitiesCost()}</CustomText>
              <CustomText>All cities time: {getAllCitiesTime()}</CustomText>

              <FlatList
                style={stylesCommon.gridListFullHeight}
                data={data.liberateCities}
                numColumns={3}
                renderItem={({ item }) => {
                  return (
                    <SGoodWrapper
                      onPress={() => setSelectedCity(item)}
                      selected={selectedCity.id === item.id}
                    >
                      <View>
                        <CustomText>
                          ID: {item.id}, {item.name}
                        </CustomText>
                      </View>
                      <View>
                        <CustomText>Exp: {item.experience}</CustomText>
                      </View>
                      <CustomText>Requirements:</CustomText>
                      <SResources>
                        {item.resources.map((resource) => {
                          return (
                            <View key={resource.id}>
                              <CustomImage id={resource.id} size={'small'} />
                              <SQty>{resource.qty}</SQty>
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
                {selectedCity && (
                  <View>
                    <View>
                      <CustomText>
                        ID:
                        {selectedCity.id},
                        <STextInput
                          onChangeText={(value) => {
                            setSelectedCity((prevState) => {
                              return { ...prevState, name: value };
                            });

                            setData((prevData) => {
                              let newData = { ...prevData };

                              newData.liberateCities =
                                newData.liberateCities.map((item) => {
                                  if (item.id === selectedCity.id) {
                                    item.name = value;
                                  }

                                  return item;
                                });

                              return newData;
                            });
                          }}
                          value={selectedCity.name}
                        />
                        Exp:
                        <STextInput
                          onChangeText={(value) => {
                            setSelectedCity((prevState) => {
                              return {
                                ...prevState,
                                experience: Number(value),
                              };
                            });

                            setData((prevData) => {
                              let newData = { ...prevData };

                              newData.liberateCities =
                                newData.liberateCities.map((item) => {
                                  if (item.id === selectedCity.id) {
                                    item.experience = Number(value);
                                  }

                                  return item;
                                });

                              return newData;
                            });
                          }}
                          value={String(selectedCity.experience)}
                        />
                      </CustomText>
                    </View>
                    <View>
                      <CustomText>
                        Resources cost:{' '}
                        {getRequiredResourcesCost(selectedCity.resources)}
                      </CustomText>
                      <CustomText>
                        Resources time: {getCityRequiredResourcesTime()}
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
                                  setSelectedCity((prevState) => {
                                    let requirementResources = [
                                      ...selectedCity.resources,
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

                                    updateCityRequiredResources(
                                      requirementResources,
                                    );

                                    return {
                                      ...prevState,
                                      resources: requirementResources,
                                    };
                                  });
                                }}
                                value={String(getRequiredCityQty(item.id))}
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
  width: 150px;

  ${({ selected }) => (selected ? 'background: green' : '')}
`;

const SMineGoodWrapper = styled.Pressable<{ selected?: boolean }>`
  padding-bottom: 30px;
  padding-right: 20px;
  width: 200px;

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

const SProvidedResource = styled.Pressable<{ selected?: boolean }>`
  ${({ selected }) => (selected ? 'background: green' : '')}
`;

const SResourcesMines = styled.View`
  gap: 0 10px;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;

const SColumn = styled.View`
  width: 50%;
`;
