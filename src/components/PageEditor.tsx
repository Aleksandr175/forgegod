import React, { useState } from 'react';
import styled from 'styled-components/native';
import { IDictionary, IGood } from '../types';
import { CustomImage } from './CustomImage';
import { CustomText } from './CustomText';
import { SQty, SResources, styles as stylesCommon } from '../styles';
import { FlatList, TextInput, View } from 'react-native';

interface IProps {
  dictionary: IDictionary;
}

export const PageEditor = ({ dictionary }: IProps) => {
  const [data, setData] = useState(dictionary.goods);
  const [selectedGood, setSelectedGood] = useState(data[0]);

  console.log(data);
  console.log(selectedGood);

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
