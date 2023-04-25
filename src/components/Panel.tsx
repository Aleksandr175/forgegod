import { StyleSheet, Text, View } from 'react-native';
import React, { ReactNode } from 'react';
import styled from 'styled-components/native';

interface IProps {
  title: string;
  children: ReactNode;
}

export const Panel = ({ title, children }: IProps) => {
  return (
    <View style={styles.panelWrapper}>
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
  },
  panelTitle: {
    backgroundColor: '#71635B',
    paddingLeft: 5,
  },
  panelContent: {
    backgroundColor: '#614D41',
    width: '100%',
    padding: 5,
  },
});

const STitle = styled.Text`
  color: white;
`;
