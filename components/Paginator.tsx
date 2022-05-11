import { View , StyleSheet, Animated, useWindowDimensions} from 'react-native'
import slides from '../assets/common/slides'

type paginatorProps = {
    data : typeof slides
}
type scrollProps = {
    scrollX : Animated.Value
}

const Paginator = ({data} : paginatorProps, {scrollX} : scrollProps) => {
    const { width } = useWindowDimensions()

    return (
        <View style={styles.container}>
            {
                data.map((item,index)=>{

                    const inputRange = [(index-1)* width, index* width, (index+1)*width]
                    
                    const dotWidth = scrollX.interpolate({
                        inputRange,
                        outputRange : [10,20,10],
                        extrapolate: 'clamp'
                    })

                    return(
                        <View key={index.toString()} style={styles.dot} />
                    )
                })
            }
        </View>
    )
}

export default Paginator

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        height : 64
    },
    dot : {
        height : 10,
        width : 10,
        borderRadius : 5,
        backgroundColor : '#493d8a',
        marginHorizontal : 8
    }
})