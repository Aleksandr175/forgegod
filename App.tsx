import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { App as MainApp } from './src/App';

export default function App() {
  return (
    <View style={styles.container}>
      <MainApp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bbb',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
});
