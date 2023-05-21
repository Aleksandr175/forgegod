import React from 'react';
import { Panel } from './Panel';
import styled from 'styled-components/native';
import { IOrder } from '../types';
import { CustomImage } from './CustomImage';
import { styles as stylesCommon } from '../styles';
import { FlatList } from 'react-native';
import { ProgressBar } from './ProgressBar';
import { CustomText } from './CustomText';

interface IProps {
  orders: IOrder[];
  maxOrdersQty: number;
}

export const PanelOrders = ({ orders, maxOrdersQty }: IProps) => {
  return (
    <Panel title={'In Process ' + orders.length + ' / ' + maxOrdersQty}>
      {orders.length === 0 && (
        <CustomText>
          No current orders. You can order something in the right panel
        </CustomText>
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
                {/*<SQty>{item.qty}</SQty>*/}
              </SResource>

              <ProgressBar
                percent={
                  ((item.timePerItem - item.timeLeft) / item.timePerItem) * 100
                }
              ></ProgressBar>
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

const SQty = styled(CustomText)`
  padding-left: 5px;
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

const SOrderDetails = styled.View`
  flex: 1;
`;

const SWorkerEmpty = styled.View`
  width: 48px;
  height: 48px;
  background-color: #71635b;
`;
