import React from 'react';
import styled from 'styled-components/native';
import { FlatList, View } from 'react-native';
import { Panel } from './Panel';
import { ICustomerOrder, IMine, IStorageGood } from '../types';
import { CustomImage } from './CustomImage';
import { SButton, styles as stylesCommon } from '../styles';
import { CustomText } from './CustomText';
import { hasEnoughResources, resourceQtyInStorage } from '../utils';
import { ProgressBar } from './ProgressBar';

interface IProps {
  dictionary: IMine[];
  storage: IStorageGood[];
  orders: ICustomerOrder[];
  onCompleteOrder: (id: string) => void;
  maxCustomerOrdersQty: number;
}

export const PageOrders = ({
  storage,
  orders,
  onCompleteOrder,
  maxCustomerOrdersQty,
}: IProps) => {
  return (
    <SPageOrders>
      <Panel
        title={
          'Customer Orders ' + orders.length + ' / ' + maxCustomerOrdersQty
        }
      >
        {orders.length === 0 && (
          <SNoOrders>
            No current orders from customers. We need to wait for new customers.
          </SNoOrders>
        )}
        <FlatList
          style={stylesCommon.orderGridList}
          data={orders}
          numColumns={1}
          renderItem={({ item }) => (
            <SOrderInProcessWrapper>
              {item.customerId ? (
                <SWorkerImage>
                  <CustomImage
                    type={'customers'}
                    id={item.customerId}
                    size={'superBig'}
                  />
                </SWorkerImage>
              ) : (
                <SWorkerEmpty />
              )}
              <SOrderDetails>
                <SOrderDetailsHeader>
                  <SResource>
                    {item.goods.map((good) => {
                      return (
                        <View key={good.id}>
                          <CustomImage id={good.id} size={'big'} />
                          <SQty>
                            {resourceQtyInStorage(good.id, storage)} /{' '}
                            {good.qty}
                          </SQty>
                        </View>
                      );
                    })}

                    <SCostIcon source={require('../images/gold.png')} />
                    <SCost>{item.cost}</SCost>
                  </SResource>

                  <SButtonWrapper>
                    <SButton
                      onPress={() => {
                        onCompleteOrder(item.id);
                      }}
                      disabled={!hasEnoughResources(storage, item.goods)}
                    >
                      <CustomText>Complete</CustomText>
                    </SButton>
                  </SButtonWrapper>
                </SOrderDetailsHeader>

                <ProgressBar
                  percent={(item.timeLeft / item.timeTotal) * 100}
                ></ProgressBar>
              </SOrderDetails>
            </SOrderInProcessWrapper>
          )}
          keyExtractor={(item) => String(item.id)}
        />
      </Panel>
    </SPageOrders>
  );
};

const SPageOrders = styled.View`
  width: 100%;
  height: 100%;
`;

const SNoOrders = styled(CustomText)`
  color: white;
`;

const SWorkerEmpty = styled.View`
  width: 48px;
  height: 48px;
  background-color: #71635b;
`;

const SOrderInProcessWrapper = styled.View`
  flex-direction: row;
  gap: 10px;
  width: 100%;
  margin-bottom: 5px;
`;

const SOrderDetailsHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const SResource = styled.View`
  gap: 10px;
  flex-direction: row;
  align-items: center;
  padding-bottom: 5px;
  flex: 1;
`;

const SCostIcon = styled.Image`
  margin-left: 10px;
  height: 16px;
  width: 16px;
`;
const SCost = styled(CustomText)`
  margin-left: -8px;
  color: yellow;
`;

const SQty = styled(CustomText)`
  color: white;
`;

const SOrderDetails = styled.View`
  flex: 1;
`;

const SWorkerImage = styled.View`
  background-color: #71635b;
  width: 48px;
  height: 48px;
`;

const SButtonWrapper = styled.View`
  align-items: center;
  flex-direction: row;
`;
