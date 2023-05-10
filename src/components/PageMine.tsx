import React from 'react';
import styled from 'styled-components/native';
import { Panel } from './Panel';
import { IMine, IStorageGood } from '../types';
import { CustomImage } from './CustomImage';
import { PanelShop } from './PanelShop';
import { CustomText } from './CustomText';
import {
  SButton,
  SQty,
  SResourceRequired,
  SResources,
  SResourcesText,
} from '../styles';
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
  isExpeditionInProcess: boolean;
  sendExpedition: (mine: IMine) => void;
}

export const PageMine = ({
  mineLvl,
  dictionary,
  onBuyGood,
  onImproveMine,
  money,
  storage,
  isExpeditionInProcess,
  sendExpedition,
}: IProps) => {
  const currentMineLvlInfo = dictionary.find((mine) => mine.lvl === mineLvl)!;

  const nextLvlMineInfo =
    dictionary.find((mine) => mine.lvl === mineLvl + 1) || null;

  const expeditionCost = currentMineLvlInfo?.expedition?.cost || 0;

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
        <SColumnLeft>
          <Panel title={'Improve Mine'}>
            {nextLvlMineInfo &&
            nextLvlMineInfo.requirements.resources?.length > 0 ? (
              <>
                <SResourcesText>Required:</SResourcesText>
                <SResources>
                  {nextLvlMineInfo.requirements.resources.map((requirement) => {
                    return (
                      <SResourceRequired key={requirement.id}>
                        <CustomImage id={requirement.id} size={'small'} />
                        <SQty>
                          {resourceQtyInStorage(requirement.id, storage)} /{' '}
                          {requirement.qty}
                        </SQty>
                      </SResourceRequired>
                    );
                  })}

                  <SResourceRequired>
                    <SImage source={require('../images/gold.png')} />
                    <SQty>{nextLvlMineInfo.requirements.money}</SQty>
                  </SResourceRequired>
                </SResources>

                <SResourcesText>It will provide you:</SResourcesText>
                <SResources>
                  {nextLvlMineInfo.newProvidedResourceIds.map((id) => {
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
                      nextLvlMineInfo,
                      storage,
                      money,
                    )
                  }
                >
                  <CustomText>Improve</CustomText>
                </SButton>
              </>
            ) : (
              <CustomText>The Mine has been fully upgraded</CustomText>
            )}
          </Panel>
        </SColumnLeft>
        <SColumnRight>
          <Panel title={'Expedition'}>
            {currentMineLvlInfo &&
              currentMineLvlInfo.expedition.canBeFoundGoods?.length > 0 && (
                <>
                  <SResourcesText>Required:</SResourcesText>
                  <SResources>
                    <SResourceRequired>
                      <SImage source={require('../images/gold.png')} />
                      <SQty>{expeditionCost}</SQty>
                    </SResourceRequired>
                  </SResources>

                  <SResourcesText>You can find:</SResourcesText>
                  <SResources>
                    {currentMineLvlInfo.expedition.canBeFoundGoods.map(
                      (good) => {
                        return (
                          <SResourceRequired key={good.id}>
                            <CustomImage id={good.id} size={'small'} />
                          </SResourceRequired>
                        );
                      },
                    )}
                  </SResources>

                  <SButton
                    onPress={() => {
                      sendExpedition(currentMineLvlInfo);
                    }}
                    disabled={isExpeditionInProcess || money < expeditionCost}
                  >
                    <CustomText>
                      {isExpeditionInProcess ? 'In Process' : 'Send'}
                    </CustomText>
                  </SButton>
                </>
              )}
          </Panel>
        </SColumnRight>
      </SPanelWrapper>

      <PanelShop
        onBuyGood={onBuyGood}
        currentMineLvlInfo={currentMineLvlInfo}
      ></PanelShop>
    </SPageMine>
  );
};

const SPanelWrapper = styled.View`
  flex-direction: row;
`;

const SColumnLeft = styled.View`
  width: 50%;
`;
const SColumnRight = styled.View`
  width: 50%;
`;

const SPageMine = styled.View`
  padding-top: 10px;
  width: 100%;
  height: 100%;
  background-color: #51607d;
`;

const SMineInfo = styled.View`
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
