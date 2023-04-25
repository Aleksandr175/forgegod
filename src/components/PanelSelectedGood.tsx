import { StyleSheet, Text, View } from 'react-native';
import { Panel } from './Panel';
import React, { useState } from 'react';
import { dictionary } from '../dictionary';
import { IStorageGood } from '../types';
import styled from 'styled-components/native';
import { CustomImage } from './CustomImage';

interface IProps {
  goodId?: number;
  onCreateOrder: (id: number, qty: number) => void;
  storage: IStorageGood[];
}

export const PanelSelectedGood = ({
  goodId,
  onCreateOrder,
  storage,
}: IProps) => {
  const good = dictionary.goods.find((item) => item.id === goodId);
  const [qty, setQty] = useState(1);

  const isAvailableToOrder = (): boolean => {
    let canOrder = true;

    good?.requirements.resources.forEach((requiredResource) => {
      const itemInStorage = storage.find(
        (item) => item.id === requiredResource.id,
      );

      if (itemInStorage) {
        if (itemInStorage.qty < requiredResource.qty) {
          canOrder = false;
        }
      }
    });

    return canOrder;
  };

  return (
    <Panel title={'Order'}>
      <View style={styles.selectedItem}>
        <View style={styles.selectedItemImage}>
          {goodId && <CustomImage id={goodId} size={'big'} />}
        </View>
        <View style={styles.selectedItemInfo}>
          {goodId && good && (
            <>
              <Text style={styles.selectedItemTitle}>{good.name}</Text>
              {good.requirements.resources?.length > 0 && (
                <>
                  <Text style={styles.selectedItemTitle}>Required:</Text>
                  {good.requirements.resources.map((requirement) => {
                    return (
                      <View style={styles.selectedItemRequired}>
                        <CustomImage id={requirement.id} size={'small'} />
                        <SQty>{requirement.qty}</SQty>
                      </View>
                    );
                  })}
                </>
              )}
              <SSeparator />

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
        </View>
      </View>
    </Panel>
  );
};

const styles = StyleSheet.create({
  selectedItem: {
    padding: 5,
    flexDirection: 'row',
  },
  selectedItemImage: {
    width: 40,
    height: 40,
    backgroundColor: '#71635B',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedItemInfo: {},
  selectedItemTitle: {
    color: 'white',
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

const SButton = styled.Pressable<{ disabled?: boolean }>`
  background-color: ${(props) => (props.disabled ? '#444' : '#F49300')};

  ${({ disabled }) =>
    disabled
      ? `
      opacity: .5;
      `
      : ''};
`;

const SQty = styled.Text`
  color: white;
`;
