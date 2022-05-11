import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';


const HomeScreen = () => {

    const removeItem = async () => {
        try{
            await AsyncStorage.removeItem('@viewedOnboarding')
        }
        catch(e){
            console.log('e',e)
        }
    }

    return (
        <View>
            <TouchableOpacity onPress={removeItem} style={styles.button}>
                <Text style={styles.text}>Back to Onboarding</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container : {
        flex  : 1,
        justifyContent : 'center',
        alignItems : "center"
    },
    button : {
        padding : 20,
        borderRadius : 20,
        backgroundColor : '#00008B',
    },
    text : {
        color : '#FFF',
        textAlign : 'center'
    }
})