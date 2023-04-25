import React from 'react';
import { TImage, TSize } from '../types';
import styled from 'styled-components/native';

const getImageSource = (id: number, type?: TImage) => {
  if (type === 'workers') {
    if (id === 1) {
      return require(`../images/workers/1.png`);
    }
    if (id === 2) {
      return require(`../images/workers/2.png`);
    }
    if (id === 3) {
      return require(`../images/workers/3.png`);
    }
    if (id === 4) {
      return require(`../images/workers/4.png`);
    }
  }

  if (id === 1) {
    return require(`../images/1.png`);
  }
  if (id === 2) {
    return require(`../images/2.png`);
  }
  if (id === 3) {
    return require(`../images/3.png`);
  }
  if (id === 4) {
    return require(`../images/4.png`);
  }
};

export const CustomImage = ({
  id,
  size,
  type,
}: {
  id: number;
  size: TSize;
  type?: TImage;
}) => {
  return <SImage source={getImageSource(id, type)} size={size}></SImage>;
};

const SImage = styled.Image<{ size?: TSize }>`
  width: 32px;
  height: 32px;

  ${({ size }) =>
    size === 'small'
      ? `
      width: 16px;
      height: 16px;`
      : ''};

  ${({ size }) =>
    size === 'superBig'
      ? `
      width: 48px;
      height: 48px;`
      : ''};
`;
