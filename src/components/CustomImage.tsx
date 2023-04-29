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

  if (type === 'customers') {
    if (id === 1) {
      return require(`../images/customers/1.png`);
    }
    if (id === 2) {
      return require(`../images/customers/2.png`);
    }
    if (id === 3) {
      return require(`../images/customers/3.png`);
    }
    if (id === 4) {
      return require(`../images/customers/4.png`);
    }
  }

  if (id === 1) {
    return require(`../images/goods/1.png`);
  }
  if (id === 2) {
    return require(`../images/goods/2.png`);
  }
  if (id === 3) {
    return require(`../images/goods/3.png`);
  }
  if (id === 4) {
    return require(`../images/goods/4.png`);
  }
  if (id === 5) {
    return require(`../images/goods/5.png`);
  }
  if (id === 6) {
    return require(`../images/goods/6.png`);
  }
  if (id === 7) {
    return require(`../images/goods/7.png`);
  }
  if (id === 8) {
    return require(`../images/goods/8.png`);
  }
  if (id === 9) {
    return require(`../images/goods/9.png`);
  }
  if (id === 10) {
    return require(`../images/goods/10.png`);
  }

  if (id === 11) {
    return require(`../images/goods/11.png`);
  }
  if (id === 12) {
    return require(`../images/goods/12.png`);
  }
  if (id === 13) {
    return require(`../images/goods/13.png`);
  }

  if (id === 30) return require(`../images/goods/30.png`);
  if (id === 31) return require(`../images/goods/31.png`);
  if (id === 32) return require(`../images/goods/32.png`);
  if (id === 33) return require(`../images/goods/33.png`);
  if (id === 34) return require(`../images/goods/34.png`);
  if (id === 35) return require(`../images/goods/35.png`);
  if (id === 36) return require(`../images/goods/36.png`);
  if (id === 37) return require(`../images/goods/37.png`);
  if (id === 38) return require(`../images/goods/38.png`);
  if (id === 39) return require(`../images/goods/39.png`);
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
