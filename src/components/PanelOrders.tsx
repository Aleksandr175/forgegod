import React from 'react';
import { Panel } from './Panel';
import styled from 'styled-components/native';
import { IOrder } from '../types';
import { CustomImage } from './CustomImage';
import { styles as stylesCommon } from '../styles';
import { FlatList } from 'react-native';

interface IProps {
  orders: IOrder[];
}

export const PanelOrders = ({ orders }: IProps) => {
  return (
    <Panel title={'Orders ' + orders.length + '/10'}>
      {orders.length === 0 && (
        <SNoOrders>
          No current orders. You can order something in the right panel
        </SNoOrders>
      )}
      <FlatList
        style={stylesCommon.orderGridList}
        data={orders}
        numColumns={1}
        renderItem={({ item }) => (
          <SOrderInProcessWrapper>
            {item.workerId ? (
              <SWorkerImage>
                <CustomImage
                  type={'workers'}
                  id={item.workerId}
                  size={'superBig'}
                />
              </SWorkerImage>
            ) : (
              <SWorkerEmpty />
            )}
            <SOrderDetails>
              <SResource>
                <CustomImage id={item.goodId} size={'big'} />
                <SQty>{item.qty}</SQty>
              </SResource>

              <SProgressWrapper>
                <SProgress
                  progressWidth={
                    ((item.timePerItem - item.timeLeft) / item.timePerItem) *
                    100
                  }
                ></SProgress>
              </SProgressWrapper>
            </SOrderDetails>
          </SOrderInProcessWrapper>
        )}
        keyExtractor={(item) => String(item.orderId)}
      />
    </Panel>
  );
};

const SResource = styled.View`
  gap: 10px;
  flex-direction: row;
  align-items: center;
  padding-bottom: 5px;
`;

const SQty = styled.Text``;

const SProgress = styled.View<{ progressWidth?: number }>`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #f49300;
  width: ${(props) => props.progressWidth}px;
`;
const SProgressWrapper = styled.View`
  position: relative;
  height: 5px;
  background-color: #71635b;
  width: 100px;
`;
const SWorkerImage = styled.View`
  background-color: #71635b;
  width: 48px;
  height: 48px;
`;

const SOrderInProcessWrapper = styled.View`
  flex-direction: row;
  gap: 10px;
  width: 100%;
  margin-bottom: 5px;
`;

const SOrderDetails = styled.View``;

const SNoOrders = styled.Text`
  color: white;
`;

const SWorkerEmpty = styled.View`
  width: 48px;
  height: 48px;
  background-color: #71635b;
`;
