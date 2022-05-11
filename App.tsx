import { ActivityIndicator, StyleSheet, View} from 'react-native';
import { useState, useEffect } from 'react';
import OnBoarding from './components/OnBoarding';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './components/HomeScreen';

const Loading = () => {
  return (
      <View>
          <ActivityIndicator size="large" />
      </View>
  )
}

const App = () => {
  const [loading, setLoading] = useState(false)
  const [viewedOnboarding, setViewedOnboarding] = useState(false)

  const checkOnBoarding = async () => {
    try {
      const value =  await AsyncStorage.getItem('@viewedOnboarding')
  
      if(value !== null){
        setViewedOnboarding(true)
      }
    }
    catch(err){
      console.log('Error', err)
    }
    finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    checkOnBoarding()
  },[])

  return (
    <View style={styles.container}>
      { loading ? <Loading /> : viewedOnboarding ? <HomeScreen /> : <OnBoarding />}
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
