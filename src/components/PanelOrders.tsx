import React from 'react';
import { View } from 'react-native';
import { Panel } from './Panel';

interface IProps {
  orders: {
    goodId: number;
    qty: number;
    timeLeft: number;
  }[];
}

export const PanelOrders = ({ orders }: IProps) => {
  return (
    <Panel title={'Orders'}>
      {orders.map((order) => {
        return (
          <View>
            Order: {order.goodId}, {order.qty}, time: {order.timeLeft}
          </View>
        );
      })}
    </Panel>
  );
};
