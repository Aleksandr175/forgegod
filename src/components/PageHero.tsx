import React from 'react';
import { Panel } from './Panel';
import styled from 'styled-components/native';
import { CustomImage } from './CustomImage';
import { CustomText } from './CustomText';
import { ProgressBar } from './ProgressBar';
import { SButton, styles as stylesCommon } from '../styles';
import { FlatList } from 'react-native';
import { dictionary } from '../dictionary';
import { ISkillLvl } from '../types';

interface IProps {
  money: number;
  lvl: number;
  exp: number;
  expNextLvl: number;
  availableSkillPoints: number;
  learnedSkillIds: number[];
  onLearnSkill: (skill?: ISkillLvl) => void;
}

export const PageHero = ({
  money,
  lvl,
  exp,
  expNextLvl,
  availableSkillPoints,
  learnedSkillIds,
  onLearnSkill,
}: IProps) => {
  return (
    <SPageHero>
      <Panel title={'Hero'} height={100}>
        <SOrderInProcessWrapper>
          <SWorkerImage>
            <CustomImage type={'workers'} id={1} size={'superBig'} />
          </SWorkerImage>

          <SOrderDetails>
            <SOrderDetailsHeader>
              <SResource>
                <CustomText>Lvl: {lvl}</CustomText>
                <CustomText>
                  Exp: {exp} / {expNextLvl}
                </CustomText>
              </SResource>
            </SOrderDetailsHeader>

            <ProgressBar percent={(exp / expNextLvl) * 100}></ProgressBar>

            <CustomText>
              Available Skill Points: {availableSkillPoints}
            </CustomText>
          </SOrderDetails>
        </SOrderInProcessWrapper>
      </Panel>

      <Panel title={'Skills'}>
        <FlatList
          style={stylesCommon.gridListFullHeight}
          data={dictionary.skills}
          numColumns={1}
          renderItem={({ item }) => {
            let isSkillLearnCompletely = false;
            let skillForLearning = item.levels.find(
              (skill) => !learnedSkillIds.includes(skill.skillId),
            );

            if (!skillForLearning) {
              skillForLearning = { ...item.levels[item.levels.length - 1] };
              isSkillLearnCompletely = true;
            }

            return (
              <SOrderInProcessWrapper>
                <SOrderDetails>
                  <SOrderDetailsHeader>
                    <SSkillInfo>
                      <CustomText>
                        {item.name} (Lvl:{' '}
                        {isSkillLearnCompletely
                          ? item.levels.length
                          : skillForLearning.level - 1}{' '}
                        / {item.levels.length})
                      </CustomText>

                      <SSkillDescription>
                        {skillForLearning.description}
                      </SSkillDescription>

                      <SResource>
                        <SCostIcon source={require('../images/gold.png')} />
                        <SCost>{skillForLearning.requirements.money}</SCost>
                      </SResource>
                    </SSkillInfo>

                    <SButtonWrapper>
                      <SButton
                        onPress={() => {
                          onLearnSkill(skillForLearning);
                        }}
                        disabled={
                          money < skillForLearning.requirements.money ||
                          isSkillLearnCompletely ||
                          !availableSkillPoints
                        }
                      >
                        <CustomText>Learn</CustomText>
                      </SButton>
                    </SButtonWrapper>
                  </SOrderDetailsHeader>
                </SOrderDetails>
              </SOrderInProcessWrapper>
            );
          }}
          keyExtractor={(item) => String(item.id)}
        />
      </Panel>
    </SPageHero>
  );
};

const SPageHero = styled.View`
  width: 100%;
  height: 100%;
`;

const SOrderInProcessWrapper = styled.View`
  flex-direction: row;
  gap: 10px;
  width: 100%;
  margin-bottom: 10px;
`;

const SResource = styled.View`
  gap: 10px;
  flex-direction: row;
  align-items: center;
  padding-bottom: 5px;
  flex: 1;
`;

const SOrderDetails = styled.View`
  flex: 1;
`;

const SWorkerImage = styled.View`
  background-color: #71635b;
  width: 48px;
  height: 48px;
`;

const SCostIcon = styled.Image`
  height: 16px;
  width: 16px;
`;
const SCost = styled(CustomText)`
  margin-left: -8px;
  color: yellow;
`;

const SButtonWrapper = styled.View`
  justify-content: center;
`;

const SOrderDetailsHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const SSkillInfo = styled.View``;

const SSkillDescription = styled(CustomText)`
  padding-bottom: 10px;
`;
