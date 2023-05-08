import React from 'react';
import styled from 'styled-components/native';

export const ProgressBar = ({ percent }: { percent: number }) => {
  return (
    <SProgressWrapper>
      <SProgress progressWidth={percent}></SProgress>
    </SProgressWrapper>
  );
};

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
