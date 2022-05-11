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

    return(
        <View style={[styles.container, {width}]}>
            <Image source={item.image} style={[styles.image, {width, resizeMode: 'contain'}]} />
            <View style={{flex:0.3}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
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
        flex : 0.7,
        justifyContent : 'center'
    },
    title : {
        textAlign : 'center',
        fontWeight : '800',
        fontSize : 20
    },
    description : {
        textAlign : 'center',
        paddingHorizontal : 64,
        paddingTop : 10,
        color : 'grey'
    }
})