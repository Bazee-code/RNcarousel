import { View, StyleSheet, FlatList, Animated,} from 'react-native'
import { useEffect, useRef, useState } from 'react'
import slides from '../assets/common/slides'
import OnBoardingItem from './OnBoardingItem'
import Paginator from './Paginator'
import OnBoardingButton from './OnBoardingButton'
import AsyncStorage from '@react-native-async-storage/async-storage';

type slidesProps = {
    viewableItems : typeof slides
}

const OnBoarding = () => {  
    const [ currentIndex, setCurrentIndex] = useState(0)
    const scrollX = useRef(new Animated.Value(0)).current

    const slidesRef = useRef(null)

    const viewableItemsChanged = useRef(({viewableItems})=> {
        setCurrentIndex(viewableItems[0].index)
        
    }).current

    const viewConfig = useRef({viewAreaCoveragePercentThreshold : 50}).current

    const scrollTo = async () => {
        if(currentIndex < slides.length - 1){
            slidesRef.current.scrollToIndex({index : currentIndex  + 1})
        }
        else{
         try {
             await AsyncStorage.setItem('@viewedOnboarding','true')
         }
         catch(e){
             console.log('error',e)
         } 
        }
    }


    return(
        <View style={styles.container}>
            <View style={{flex : 3}}>
                <FlatList
                    data = {slides}
                    renderItem = {({item}) => <OnBoardingItem item = {item} />}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event([{
                        nativeEvent : {contentOffset : {x : scrollX}}
                    }],{
                        useNativeDriver : false
                    })}
                    scrollEventThrottle = {32}
                    onViewableItemsChanged = {viewableItemsChanged}
                    viewabilityConfig = {viewConfig}
                    ref={slidesRef}
                    />
            </View>

            <Paginator data={slides} scrollX={scrollX} />
            <OnBoardingButton percentage={(currentIndex + 1) * (100/slides.length)} scrollTo={scrollTo}/>
        </View>
    )
}

export default OnBoarding

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})