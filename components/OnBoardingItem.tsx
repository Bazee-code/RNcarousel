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
    const { width : number } = useWindowDimensions()

    console.log('item',item)
    return(
        <View></View>
    )
}

export default OnBoardingItem