import { View, Text, StyleSheet } from 'react-native'

const OnBoarding = () => {

    return(
        <View style={styles.container}>
            <Text>On boarding component</Text>
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