import React from 'react';
import { Panel } from './Panel';
import styled from 'styled-components/native';
import { CustomImage } from './CustomImage';
import { CustomText } from './CustomText';

interface IProps {
  money: number;
  lvl: number;
  exp: number;
  expNextLvl: number;
  availableSkillPoints: number;
}

export const PageHero = ({
  money,
  lvl,
  exp,
  expNextLvl,
  availableSkillPoints,
}: IProps) => {
  return (
    <SPageHero>
      <Panel title={'Hero'}>
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

            <SProgressWrapper>
              <SProgress progressWidth={(exp / expNextLvl) * 100}></SProgress>
            </SProgressWrapper>

            <CustomText>
              Available Skill Points: {availableSkillPoints}
            </CustomText>
          </SOrderDetails>
        </SOrderInProcessWrapper>
      </Panel>

      <Panel title={'Skills'}>Skills</Panel>
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
  margin-bottom: 5px;
`;

const SOrderDetailsHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
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

const SProgress = styled.View<{ progressWidth?: number }>`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #f49300;
  width: ${(props) => props.progressWidth}%;
`;
const SProgressWrapper = styled.View`
  position: relative;
  height: 5px;
  background-color: #71635b;
  width: 100%;
`;
const SWorkerImage = styled.View`
  background-color: #71635b;
  width: 48px;
  height: 48px;
`;
