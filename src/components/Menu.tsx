import React from 'react';
import styled from 'styled-components/native';
import { CustomText } from './CustomText';
import { TPage } from '../types';

interface IProps {
  setPage: (page: TPage) => void;
  availableSkillPoints: number;
  customerOrdersQty: number;
}

export const Menu = React.memo(
  ({ setPage, availableSkillPoints, customerOrdersQty }: IProps) => {
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
          <SText>
            Hero
            {availableSkillPoints > 0 && (
              <SMark important={true}>{availableSkillPoints}</SMark>
            )}
          </SText>
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
          <SText>
            Orders
            {customerOrdersQty > 0 && <SMark>{customerOrdersQty}</SMark>}
          </SText>
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
  },
);

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

const SText = styled(CustomText)`
  position: relative;
`;

const SMark = styled(CustomText)<{ important?: boolean }>`
  position: absolute;
  width: 15px;
  height: 15px;
  text-align: center;
  border-radius: 10px;
  top: -10px;

  background: #f49300;

  ${({ important }) =>
    important
      ? `
        background: red;
      `
      : ''};
`;
