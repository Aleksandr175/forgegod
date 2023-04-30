import React from 'react';
import styled from 'styled-components/native';
import { CustomText } from './CustomText';
import { TPage } from '../types';

interface IProps {
  setPage: (page: TPage) => void;
}

export const Menu = React.memo(({ setPage }: IProps) => {
  return (
    <SMenu>
      <SMenuItem
        onPress={() => {
          setPage('forge');
        }}
      >
        <SText>Forge</SText>
      </SMenuItem>
      <SMenuItem
        onPress={() => {
          setPage('hero');
        }}
      >
        <SText>Hero</SText>
      </SMenuItem>
      <SMenuItem
        onPress={() => {
          setPage('mine');
        }}
      >
        <SText>Mine</SText>
      </SMenuItem>
      <SMenuItem
        onPress={() => {
          setPage('orders');
        }}
      >
        <SText>Orders</SText>
      </SMenuItem>
      <SMenuItem
        onPress={() => {
          setPage('city');
        }}
      >
        <SText>City</SText>
      </SMenuItem>
    </SMenu>
  );
});

const SMenu = styled.View`
  width: 100%;
  background-color: #333;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 30px;
  flex-direction: row;
  height: 10%;
`;

const SMenuItem = styled.Pressable`
  width: 20%;
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: center;
`;

const SText = styled(CustomText)``;
