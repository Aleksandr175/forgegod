import React from 'react';
import styled from 'styled-components/native';
import { Panel } from './Panel';
import { IMine, IStorageGood } from '../types';
import { CustomImage } from './CustomImage';
import { PanelShop } from './PanelShop';
import { CustomText } from './CustomText';
import { SButton } from '../styles';
import {
  hasEnoughResourcesToImproveMine,
  resourceQtyInStorage,
} from '../utils';

interface IProps {
  mineLvl: number;
  dictionary: IMine[];
  onBuyGood: (goodId: number, qty: number) => void;
  onImproveMine: () => void;
  money: number;
  storage: IStorageGood[];
}

export const PageMine = ({
  mineLvl,
  dictionary,
  onBuyGood,
  onImproveMine,
  money,
  storage,
}: IProps) => {
  const currentMineLvlInfo =
    dictionary.find((mine) => mine.nextLvl === mineLvl + 1) || null;

  return (
    <SPageMine>
      <SMineInfo>
        <SImageMine source={require('../images/mine.png')} />
        <SMineDetails>
          <SMineTitle>Mine</SMineTitle>
          <SMineLvl>Lvl: {mineLvl}</SMineLvl>
        </SMineDetails>
      </SMineInfo>

      <SPanelWrapper>
        <Panel title={'Improve Mine'}>
          {currentMineLvlInfo &&
            currentMineLvlInfo.requirements.resources?.length > 0 && (
              <>
                <SText>Required:</SText>
                <SResources>
                  {currentMineLvlInfo.requirements.resources.map(
                    (requirement) => {
                      return (
                        <SResourceRequired key={requirement.id}>
                          <CustomImage id={requirement.id} size={'small'} />
                          <SQty>
                            {resourceQtyInStorage(requirement.id, storage)} /{' '}
                            {requirement.qty}
                          </SQty>
                        </SResourceRequired>
                      );
                    },
                  )}

                  <SResourceRequired>
                    <SImage source={require('../images/gold.png')} />
                    <SQty>{currentMineLvlInfo.requirements.money}</SQty>
                  </SResourceRequired>
                </SResources>

                <SText>It will provide you:</SText>
                <SResources>
                  {currentMineLvlInfo.provideResourceIds.map((id) => {
                    return (
                      <SResourceRequired key={id}>
                        <CustomImage id={id} size={'small'} />
                      </SResourceRequired>
                    );
                  })}
                </SResources>

                <SButton
                  onPress={onImproveMine}
                  disabled={
                    !hasEnoughResourcesToImproveMine(
                      currentMineLvlInfo,
                      storage,
                      money,
                    )
                  }
                >
                  <CustomText>Improve</CustomText>
                </SButton>
              </>
            )}
        </Panel>
      </SPanelWrapper>

      <PanelShop mineLvl={mineLvl || 1} onBuyGood={onBuyGood}></PanelShop>
    </SPageMine>
  );
};

const SPanelWrapper = styled.View`
  height: 150px;
`;

const SPageMine = styled.View`
  padding-top: 10px;
  width: 100%;
  height: 100%;
`;

const SMineInfo = styled.View`
  align-items: center;
`;

const SText = styled(CustomText)`
  padding-bottom: 5px;
`;

const SQty = styled(CustomText)``;

const SResourceRequired = styled.View`
  flex-direction: row;
  padding-bottom: 5px;
`;

const SResources = styled.View`
  gap: 10px;
  flex-direction: row;
  align-items: center;
`;

const SImageMine = styled.Image`
  width: 256px;
  height: 64px;
  margin-bottom: 8px;
`;

const SMineDetails = styled.View`
  margin-left: 8px;
  flex-direction: row;
`;

const SMineTitle = styled(CustomText)`
  color: white;
  font-weight: 700;
  margin-right: 8px;
`;

const SMineLvl = styled(CustomText)`
  font-weight: 700;
  color: white;
`;

const SImage = styled.Image`
  height: 16px;
  width: 16px;
`;
