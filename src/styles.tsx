import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { TSize } from './types';

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
  },
  storageGridList: {
    height: 140,
  },
  storageGridGoodsList: {
    height: 240,
  },
  storageGridItem: {
    margin: 5,
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
