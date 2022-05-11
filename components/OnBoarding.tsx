import { View, StyleSheet, FlatList, ListRenderItem} from 'react-native'
import slides from '../assets/common/slides'
import OnBoardingItem from './OnBoardingItem'

const OnBoarding = () => {  

    return(
        <View style={styles.container}>
            <FlatList
                data = {slides}
                renderItem = {({item}) => <OnBoardingItem item = {item} />}
                horizontal
                showsHorizontalScrollIndicator
                pagingEnabled
                />
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