import { StyleSheet, Text, View } from 'react-native';
import OnBoarding from './components/OnBoarding';

const App = () => {
  return (
    <View style={styles.container}>
      <OnBoarding />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
