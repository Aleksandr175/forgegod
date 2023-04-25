import React from 'react';
import styled from 'styled-components/native';
import { Image, Text, View } from 'react-native';
import { Panel } from './Panel';
import { IMine } from '../types';
import { CustomImage } from './CustomImage';

interface IProps {
  lvl: number;
  dictionary: IMine[];
}

export const PageMine = ({ lvl, dictionary }: IProps) => {
  const currentMineLvl =
    dictionary.find((mineLvl) => mineLvl.nextLvl === lvl + 1) || null;
  //console.log('page mine');

  return (
    <SPageMine>
      <SMineInfo>
        <SImage source={require('../images/mine.png')} />
        <SMineDetails>
          <SMineTitle>Mine</SMineTitle>
          <SMineLvl>Lvl: 1</SMineLvl>
        </SMineDetails>
      </SMineInfo>

      <Panel title={'Improve Mine'}>
        {currentMineLvl &&
          currentMineLvl.requirements.resources?.length > 0 && (
            <>
              <SText>Required:</SText>
              <SResources>
                {currentMineLvl.requirements.resources.map((requirement) => {
                  return (
                    <SResourceRequired>
                      <CustomImage id={requirement.id} size={'small'} />
                      <SQty>{requirement.qty}</SQty>
                    </SResourceRequired>
                  );
                })}
              </SResources>
              <SText>It will provide you:</SText>
              {currentMineLvl.provideResourceIds.map((id) => {
                return (
                  <SResourceRequired>
                    <CustomImage id={id} size={'small'} />
                  </SResourceRequired>
                );
              })}

              <SButton
                onPress={() => {
                  //onCreateOrder(goodId, qty);
                }}
                //disabled={!isAvailableToOrder()}
              >
                <Text>Improve</Text>
              </SButton>
            </>
          )}
      </Panel>
    </SPageMine>
  );
};

const SPageMine = styled.View`
  padding-top: 10px;
`;

const SMineInfo = styled.View`
  align-items: center;
`;

const SText = styled.Text`
  color: white;
`;

const SQty = styled.Text`
  color: white;
`;

const SResourceRequired = styled.View`
  flex-direction: row;
`;

const SResources = styled.View`
  flex-direction: column;
`;

const SImage = styled.Image`
  width: 256px;
  height: 64px;
  margin-bottom: 8px;
`;

const SMineDetails = styled.View`
  margin-left: 8px;
  flex-direction: row;
`;

const SMineTitle = styled.Text`
  color: white;
  font-weight: 700;
  display: inline-block;
  margin-right: 8px;
`;

const SMineLvl = styled.Text`
  font-weight: 700;
  color: white;
`;

const SButton = styled.Pressable<{ disabled?: boolean }>`
  background-color: ${(props) => (props.disabled ? '#444' : '#F49300')};
  padding: 5px;

  ${({ disabled }) =>
    disabled
      ? `
      opacity: .5;
      `
      : ''};
`;
