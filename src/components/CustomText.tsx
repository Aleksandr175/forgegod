import styled from 'styled-components/native';

// @ts-ignore
export const CustomText = ({ children, ...rest }) => {
  return <SText {...rest}>{children}</SText>;
};

const SText = styled.Text`
  color: white;
  font-family: 'LGGothic';
`;
