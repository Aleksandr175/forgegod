import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { TSize } from './types';
import { CustomText } from './components/CustomText';

export const styles = StyleSheet.create({
  iconSmall: {
    width: 16,
    height: 16,
  },
  iconBig: {
    width: 32,
    height: 32,
  },

  storageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    height: '100px',
  },
  storageGridList: {
    height: '100%',
  },
  storageGridGoodsList: {
    height: '100%',
  },
  gridListFullHeight: {
    height: '100%',
  },
  orderGridList: {
    height: 360,
  },
  storageGridItem: {
    marginRight: 5,
    marginBottom: 5,
    backgroundColor: '#71635B',
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'black',
    position: 'relative',
  },
  storageGridItemSelected: {
    borderColor: '#F49300',
  },
  storageGridItemQty: {
    position: 'absolute',
    right: 3,
    bottom: 3,
    color: 'white',
  },
});

export const SIcon = styled.Image<{ size?: TSize }>`
  width: 32px;
  height: 32px;

  ${({ size }) =>
    size === 'small'
      ? `
      width: 16px;
      height: 16px;`
      : ''};
`;

export const SButton = styled.Pressable<{ disabled?: boolean }>`
  background-color: ${(props) => (props.disabled ? '#444' : '#F49300')};
  padding: 5px;

  ${({ disabled }) =>
    disabled
      ? `
      opacity: .5;
      `
      : ''};
`;

export const SResourcesText = styled(CustomText)`
  padding-bottom: 5px;
`;

export const SQty = styled(CustomText)``;

export const SResourceRequired = styled.View`
  flex-direction: row;
  padding-bottom: 5px;
`;

export const SResources = styled.View`
  gap: 10px;
  flex-direction: row;
  align-items: center;
`;

export const SArrowNextCity = styled(CustomText)`
  font-size: 40px;
  position: relative;
  left: 2px;
  top: -1px;
`;

export const SArrowWrapper = styled.Pressable`
  top: 10px;
  right: 20px;
  width: 50px;
  height: 50px;
  position: absolute;
  border-radius: 50px;
  background: #614d41;
  align-items: center;
  justify-content: center;
`;

export const SGridWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100px;
  flex: 1;
`;

export const SGridItem = styled.Pressable`
  margin-right: 5px;
  margin-bottom: 5px;
  background-color: #71635b;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-style: solid;
  border-color: black;
  position: relative;
`;
