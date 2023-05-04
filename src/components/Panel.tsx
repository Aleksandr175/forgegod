import { StyleSheet, Text, View } from 'react-native';
import React, { ReactNode } from 'react';
import styled from 'styled-components/native';
import { CustomText } from './CustomText';

interface IProps {
  title: string;
  children: ReactNode;
  height?: number;
}

export const Panel = ({ title, children, height }: IProps) => {
  const getPanelStyles = () => {
    if (height) {
      return {
        padding: 5,
        width: '100%',
        height: height,
        flexShrink: 1,
      };
    }

    return {
      padding: 5,
      width: '100%',
      height: '100%',
      flexShrink: 1,
    };
  };

  return (
    <View style={getPanelStyles()}>
      {title && (
        <View style={styles.panelTitle}>
          <STitle>{title}</STitle>
        </View>
      )}
      <View style={styles.panelContent}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  panelWrapper: {
    padding: 5,
    width: '100%',
    height: '100%',
    flexShrink: 1,
  },
  panelTitle: {
    backgroundColor: '#71635B',
    paddingLeft: 5,
  },
  panelContent: {
    backgroundColor: '#614D41',
    width: '100%',
    padding: 5,
    flex: 1,
  },
});

const STitle = styled(CustomText)`
  font-size: 14px;
  color: white;
  padding: 3px 0;
`;
