import { StyleSheet, Text, View } from 'react-native';
import React, { ReactNode } from 'react';

interface IProps {
  title: string;
  children: ReactNode;
}

export const Panel = ({ title, children }: IProps) => {
  return (
    <View style={styles.panelWrapper}>
      {title && (
        <View style={styles.panelTitle}>
          <Text>{title}</Text>
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
    backgroundColor: 'yellow',
  },
  panelContent: {
    backgroundColor: '#614D41',
    width: '100%',
    padding: 5,
  },
});
