import { StyleSheet, Text, View } from 'react-native';
import { Panel } from './Panel';
import React, { useState } from 'react';
import { dictionary } from '../dictionary';
import { IStorageGood } from '../types';
import styled from 'styled-components/native';
import { CustomImage } from './CustomImage';
import { SButton } from '../styles';
import { CustomText } from './CustomText';
import { hasEnoughResources } from '../utils';

interface IProps {
  goodId?: number;
  canOrder: boolean;
  onCreateOrder: (id: number, qty: number) => void;
  storage: IStorageGood[];
}

export const PanelSelectedGood = React.memo(
  ({ goodId, onCreateOrder, storage, canOrder }: IProps) => {
    const good = dictionary.goods.find((item) => item.id === goodId);
    const [qty, setQty] = useState(1);

    const isAvailableToOrder = (): boolean => {
      return (
        hasEnoughResources(storage, good!.requirements.resources) && canOrder
      );
    };

    return (
      <Panel title={'Order'} height={150}>
        <SSelectedItem>
          <SSelectedItemImage>
            {goodId && <CustomImage id={goodId} size={'big'} />}
          </SSelectedItemImage>
          <SSelectedItemInfo>
            {goodId && good && (
              <>
                <SText style={styles.selectedItemTitle}>{good.name}</SText>
                {good.requirements.resources?.length > 0 && (
                  <>
                    <SText style={styles.selectedItemTitle}>Required:</SText>
                    <SResources>
                      {good.requirements.resources.map((requirement) => {
                        return (
                          <View
                            style={styles.selectedItemRequired}
                            key={requirement.id}
                          >
                            <CustomImage id={requirement.id} size={'small'} />
                            <SQty>{requirement.qty}</SQty>
                          </View>
                        );
                      })}
                    </SResources>
                  </>
                )}

                <SButton
                  onPress={() => {
                    onCreateOrder(goodId, qty);
                  }}
                  disabled={!isAvailableToOrder()}
                >
                  <Text style={styles.buttonText}>Order</Text>
                </SButton>
              </>
            )}
          </SSelectedItemInfo>
        </SSelectedItem>
      </Panel>
    );
  },
);

const SSelectedItem = styled.View`
  flex-direction: row;
  width: 100%;
`;

const SSelectedItemImage = styled.View`
  width: 40px;
  height: 40px;
  background-color: #71635b;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;

const styles = StyleSheet.create({
  selectedItemTitle: {
    paddingBottom: 5,
  },
  selectedItemRequired: {
    flexDirection: 'row',
  },
  buttonText: {
    textAlign: 'center', // <-- the magic
    color: 'white',
  },
});

const SSeparator = styled.View`
  padding: 5px;
`;

const SQty = styled(CustomText)`
  color: white;
`;

const SText = styled(CustomText)``;

const SResources = styled.View`
  gap: 10px;
  flex-direction: row;
  align-items: center;
  padding-bottom: 10px;
`;

const SSelectedItemInfo = styled.View`
  flex: 1;
  height: 100%;
`;
