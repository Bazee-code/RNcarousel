import { View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native'

type slidesProps = {
    item : {
        id: string,
        title : string,
        description : string,
        image : string
    }
}

const OnBoardingItem = ({item}: slidesProps) => {
    const { width }  = useWindowDimensions()

    // console.log('item',item)
    return(
        <View style={[styles.container, {width}]}>
            <Image source={item.image} style={[styles.image, {width, resizeMode: 'contain'}]} />
        </View>
    )
}

export default OnBoardingItem

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    image : {

    }
})