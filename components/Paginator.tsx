import { View , Text, StyleSheet, ImageSourcePropType} from 'react-native'
import slides from '../assets/common/slides'

type paginatorProps = {
    data : typeof slides
}

const Paginator = ({data} : paginatorProps) => {
    
    return (
        <View style={styles.container}>
            {
                data.map((item,index)=>(
                    <View key={index.toString()} style={styles.dot} />
                ))
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