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
    return require(`../images/goods/32/1.png`);
  }
  if (id === 2) {
    return require(`../images/goods/32/2.png`);
  }
  if (id === 3) {
    return require(`../images/goods/32/3.png`);
  }
  if (id === 4) {
    return require(`../images/goods/32/4.png`);
  }
  if (id === 5) {
    return require(`../images/goods/32/5.png`);
  }
  if (id === 6) {
    return require(`../images/goods/32/6.png`);
  }
  if (id === 7) {
    return require(`../images/goods/32/7.png`);
  }
  if (id === 8) {
    return require(`../images/goods/32/8.png`);
  }
  if (id === 9) {
    return require(`../images/goods/32/9.png`);
  }
  if (id === 10) {
    return require(`../images/goods/32/10.png`);
  }

  if (id === 11) {
    return require(`../images/goods/32/11.png`);
  }
  if (id === 12) {
    return require(`../images/goods/32/12.png`);
  }
  if (id === 13) {
    return require(`../images/goods/32/13.png`);
  }
  if (id === 14) {
    return require(`../images/goods/32/14.png`);
  }
  if (id === 15) {
    return require(`../images/goods/32/15.png`);
  }
  if (id === 16) {
    return require(`../images/goods/32/16.png`);
  }
  if (id === 17) {
    return require(`../images/goods/32/17.png`);
  }
  if (id === 18) {
    return require(`../images/goods/32/18.png`);
  }
  if (id === 19) {
    return require(`../images/goods/32/19.png`);
  }
  if (id === 20) {
    return require(`../images/goods/32/20.png`);
  }
  if (id === 21) {
    return require(`../images/goods/32/21.png`);
  }
  if (id === 22) {
    return require(`../images/goods/32/22.png`);
  }
  if (id === 23) {
    return require(`../images/goods/32/23.png`);
  }
  if (id === 24) {
    return require(`../images/goods/32/24.png`);
  }
  if (id === 25) {
    return require(`../images/goods/32/25.png`);
  }
  if (id === 26) {
    return require(`../images/goods/32/26.png`);
  }
  if (id === 27) {
    return require(`../images/goods/32/27.png`);
  }
  if (id === 28) {
    return require(`../images/goods/32/28.png`);
  }
  if (id === 29) {
    return require(`../images/goods/32/29.png`);
  }

  if (id === 30) return require(`../images/goods/32/30.png`);
  if (id === 31) return require(`../images/goods/32/31.png`);
  if (id === 32) return require(`../images/goods/32/32.png`);
  if (id === 33) return require(`../images/goods/32/33.png`);
  if (id === 34) return require(`../images/goods/32/34.png`);
  if (id === 35) return require(`../images/goods/32/35.png`);
  if (id === 36) return require(`../images/goods/32/36.png`);
  if (id === 37) return require(`../images/goods/32/37.png`);
  if (id === 38) return require(`../images/goods/32/38.png`);
  if (id === 39) return require(`../images/goods/32/39.png`);

  if (id === 40) return require(`../images/goods/32/40.png`);
  if (id === 41) return require(`../images/goods/32/41.png`);
  if (id === 42) return require(`../images/goods/32/42.png`);
  if (id === 43) return require(`../images/goods/32/43.png`);
  if (id === 44) return require(`../images/goods/32/44.png`);
  if (id === 45) return require(`../images/goods/32/45.png`);
  if (id === 46) return require(`../images/goods/32/46.png`);
  if (id === 47) return require(`../images/goods/32/47.png`);
  if (id === 48) return require(`../images/goods/32/48.png`);
  if (id === 49) return require(`../images/goods/32/49.png`);

  if (id === 200) return require(`../images/goods/32/200.png`);
  if (id === 201) return require(`../images/goods/32/201.png`);
  if (id === 202) return require(`../images/goods/32/202.png`);
  if (id === 203) return require(`../images/goods/32/203.png`);
  if (id === 204) return require(`../images/goods/32/204.png`);
  if (id === 210) return require(`../images/goods/32/210.png`);
  if (id === 211) return require(`../images/goods/32/211.png`);
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
