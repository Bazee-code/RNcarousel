import { View, StyleSheet, FlatList, Animated,} from 'react-native'
import { useRef, useState } from 'react'
import slides from '../assets/common/slides'
import OnBoardingItem from './OnBoardingItem'
import Paginator from './Paginator'
import OnBoardingButton from './OnBoardingButton'

type slidesProps = {
    viewableItems : typeof slides
}

const OnBoarding = () => {  
    const [ currentIndex, setCurrentIndex] = useState(0)
    const scrollX = useRef(new Animated.Value(0)).current
    // console.log('scroll',scrollX)
    const slidesRef = useRef(null)

    const viewableItemsChanged = useRef(({viewableItems})=> {
        setCurrentIndex(viewableItems[0].index)
        // console.log('items',viewableItems)
    }).current

    const viewConfig = useRef({viewAreaCoveragePercentThreshold : 50}).current

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
            <OnBoardingButton data={slides} />
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