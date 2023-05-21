import React from 'react';
import styled from 'styled-components/native';
import { ILiberateCity, IStorageGood, TPage } from '../types';
import { CustomText } from './CustomText';
import {
  SArrowNextCity,
  SArrowWrapper,
  SButton,
  SQty,
  SResourceRequired,
  SResources,
  SResourcesText,
} from '../styles';
import { Panel } from './Panel';
import { CustomImage } from './CustomImage';
import { resourceQtyInStorage } from '../utils';

interface IProps {
  onSetPage: (page: TPage) => void;
  dictionary: ILiberateCity[];
  cityId: number;
  storage: IStorageGood[];
  liberatedCityIds: number[];
  liberateCity: (liberateInfo: ILiberateCity) => void;
}

export const PageMapCity = React.memo(
  ({
    onSetPage,
    dictionary,
    cityId,
    storage,
    liberatedCityIds,
    liberateCity,
  }: IProps) => {
    const city = dictionary.find((c) => c.id === cityId);
    const nextCity = 'city-' + Number(cityId + 1);

    if (!city) {
      return null;
    }

    return (
      <SPageCity>
        <CustomText>{city.name}</CustomText>
        <SCityImageWrapper>
          {cityId === 1 && (
            <SCityImage
              style={{ width: '240px', height: '240px' }}
              source={require(`../images/cities/1.png`)}
            />
          )}
          {cityId === 2 && (
            <SCityImage
              style={{ width: '214px', height: '302px' }}
              source={require(`../images/cities/2.png`)}
            />
          )}
          {cityId === 3 && (
            <SCityImage
              style={{ width: '230px', height: '256px' }}
              source={require(`../images/cities/3.png`)}
            />
          )}
          {cityId === 4 && (
            <SCityImage
              style={{ width: '260px', height: '272px' }}
              source={require(`../images/cities/4.png`)}
            />
          )}
          {cityId === 5 && (
            <SCityImage
              style={{ width: '270px', height: '310px' }}
              source={require(`../images/cities/5.png`)}
            />
          )}
          {cityId === 6 && (
            <SCityImage
              style={{ width: '260px', height: '326px' }}
              source={require(`../images/cities/6.png`)}
            />
          )}
        </SCityImageWrapper>

        <Panel title={'Liberate the City'}>
          {city.resources?.length > 0 && (
            <>
              <SResourcesText>Required:</SResourcesText>
              <SResources>
                {city.resources.map((requirement) => {
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
              </SResources>

              <SResourcesText>It will provide you:</SResourcesText>
              <SResources>
                <SResourceRequired>
                  <SQty>EXP: {city.experience}</SQty>
                </SResourceRequired>
              </SResources>

              <SButton
                onPress={() => liberateCity(city)}
                disabled={liberatedCityIds.includes(city.id)}
              >
                <CustomText>
                  {liberatedCityIds.includes(city.id)
                    ? 'Liberated'
                    : 'Liberate the City'}
                </CustomText>
              </SButton>
            </>
          )}
        </Panel>

        {liberatedCityIds.includes(city.id) && (
          <SArrowWrapper onPress={() => onSetPage(nextCity)}>
            <SArrowNextCity>{'>'}</SArrowNextCity>
          </SArrowWrapper>
        )}
      </SPageCity>
    );
  },
);

const SPageCity = styled.View`
  width: 100%;
  height: 100%;
  background-color: #547e64;

  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const SCityImageWrapper = styled.View`
  position: relative;
  height: 70%;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

const SCityImage = styled.Image``;
