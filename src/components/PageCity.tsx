import React from 'react';
import styled from 'styled-components/native';
import { TPage } from '../types';
import { CustomText } from './CustomText';
import { SArrowNextCity, SArrowWrapper, SButton } from '../styles';

interface IProps {
  onSetPage: (page: TPage) => void;
}

export const PageCity = React.memo(({ onSetPage }: IProps) => {
  return (
    <SPageCity>
      <SCityImageWrapper>
        <SCityImage source={require('../images/city.png')} />

        <SMineBlock onPress={() => onSetPage('mine')}>
          <SText>Mine</SText>
        </SMineBlock>

        <SForgeBlock onPress={() => onSetPage('forge')}>
          <SText>Forge</SText>
        </SForgeBlock>

        <SMarketBlock onPress={() => onSetPage('orders')}>
          <SText>Market</SText>
        </SMarketBlock>
      </SCityImageWrapper>

      <SArrowWrapper onPress={() => onSetPage('city-1')}>
        <SArrowNextCity>{'>'}</SArrowNextCity>
      </SArrowWrapper>
    </SPageCity>
  );
});

const SPageCity = styled.View`
  width: 100%;
  background-color: #547e64;
  flex: 1;

  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const SCityImageWrapper = styled.View`
  position: relative;
  width: 366px;
  height: 561px;
  overflow: hidden;
`;

const SCityImage = styled.Image`
  width: 366px;
  height: 561px;
`;

const SMineBlock = styled.Pressable`
  position: absolute;
  width: 150px;
  height: 100px;
  justify-content: flex-end;
  align-items: center;

  top: 45px;
  left: 110px;
`;

const SText = styled(CustomText)`
  font-size: 18px;
`;

const SForgeBlock = styled.Pressable`
  position: absolute;
  width: 150px;
  height: 100px;
  justify-content: flex-end;
  align-items: center;

  bottom: 85px;
  right: 30px;
`;

const SMarketBlock = styled.Pressable`
  position: absolute;
  width: 150px;
  height: 100px;
  justify-content: flex-end;
  align-items: center;

  top: 200px;
  left: 95px;
`;
