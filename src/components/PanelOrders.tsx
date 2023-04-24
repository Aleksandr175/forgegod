import React from 'react';
import { Panel } from './Panel';
import styled from 'styled-components/native';
import { SIcon } from '../styles';
import { IOrder } from '../types';

interface IProps {
  orders: IOrder[];
}

export const PanelOrders = ({ orders }: IProps) => {
  return (
    <Panel title={'Orders'}>
      {orders.length === 0 && (
        <SNoOrders>
          No current orders. You can order something in right panel
        </SNoOrders>
      )}
      {orders.map((order) => {
        return (
          <SOrderInProcessWrapper>
            {order.workerId ? (
              <SWorkerImage
                source={require('../images/workers/' + order.workerId + '.png')}
              />
            ) : (
              <SWorkerEmpty />
            )}
            <SOrderDetails>
              <SResource>
                <SIcon
                  size={'big'}
                  source={require('../images/' + order.goodId + '.png')}
                ></SIcon>
                <SQty>{order.qty}</SQty>
              </SResource>

              <SProgressWrapper>
                <SProgress
                  progressWidth={
                    ((order.timePerItem - order.timeLeft) / order.timePerItem) *
                    100
                  }
                ></SProgress>
              </SProgressWrapper>
            </SOrderDetails>
          </SOrderInProcessWrapper>
        );
      })}
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
const SWorkerImage = styled.Image`
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
