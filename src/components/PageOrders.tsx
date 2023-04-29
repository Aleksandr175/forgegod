import React from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Panel } from './Panel';
import { ICustomerOrder, IMine, IStorageGood } from '../types';
import { CustomImage } from './CustomImage';
import { SButton, styles as stylesCommon } from '../styles';
import { CustomText } from './CustomText';

interface IProps {
  dictionary: IMine[];
  storage: IStorageGood[];
  orders: ICustomerOrder[];
  onCompleteOrder: (id: string) => void;
}

export const PageOrders = ({ storage, orders, onCompleteOrder }: IProps) => {
  const resourceInStorage = (goodId: number) => {
    return storage.find((good) => good.id === goodId)?.qty || 0;
  };

  return (
    <SPageOrders>
      <Panel title={'Customer Orders'}>
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
                        <>
                          <CustomImage id={good.id} size={'big'} />
                          <SQty>
                            {good.qty} / {resourceInStorage(good.id)}
                          </SQty>
                        </>
                      );
                    })}

                    <SCost>{item.cost}</SCost>
                  </SResource>

                  <SButtonWrapper>
                    <SButton
                      onPress={() => {
                        onCompleteOrder(item.id);
                      }}
                    >
                      <CustomText>Complete</CustomText>
                    </SButton>
                  </SButtonWrapper>
                </SOrderDetailsHeader>

                <SProgressWrapper>
                  <SProgress
                    progressWidth={(item.timeLeft / item.timeTotal) * 100}
                  ></SProgress>
                </SProgressWrapper>
              </SOrderDetails>
            </SOrderInProcessWrapper>
          )}
          keyExtractor={(item) => String(item.id)}
        />
      </Panel>
    </SPageOrders>
  );
};

const SPanelWrapper = styled.View`
  height: 150px;
`;

const SPageOrders = styled.View`
  padding-top: 10px;
  width: 100%;
`;

const SNoOrders = styled.Text`
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

const SCost = styled.Text`
  color: yellow;
  margin-left: 10px;
`;

const SQty = styled.Text`
  color: white;
`;

const SOrderDetails = styled.View`
  flex: 1;
`;

const SProgress = styled.View<{ progressWidth?: number }>`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #f49300;
  width: ${(props) => props.progressWidth}%;
`;
const SProgressWrapper = styled.View`
  position: relative;
  height: 5px;
  background-color: #71635b;
  width: 100%;
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
