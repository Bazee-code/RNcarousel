import { View, StyleSheet, Animated, TouchableOpacity} from 'react-native'
import { useEffect, useRef } from 'react'
import Svg, { G, Circle } from 'react-native-svg'
import { AntDesign } from '@expo/vector-icons'

const OnBoardingButton = () => {
    const size = 128
    const strokeWidth = 2
    const center = size / 2
    const radius = size / 2 - strokeWidth / 2
    const circumference = 2 * Math.PI * radius

    const progressAnimation = useRef(new Animated.Value(0)).current;
    const progressRef = useRef(null)

    const animaton

    return (
        <View style={styles.container}>
            <Svg height={size} width={size}>
                <G rotation={-90} origin={center}>
                    <Circle cx={center} cy={center} r={radius} stroke="#E6E7EB" strokeWidth={strokeWidth} />
                    <Circle cx={center} cy={center} r={radius} stroke="#00008B" strokeWidth={strokeWidth}
                        strokeDasharray={circumference} strokeDashoffset={circumference - (circumference*25) / 100} />
                </G>
            </Svg>

            <TouchableOpacity style={styles.button}>
                <AntDesign name="caretright" size={32} color="#fff" />
            </TouchableOpacity>
        </View>
    )
}

export default OnBoardingButton

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    button : {
        position : 'absolute',
        backgroundColor : '#00008B',
        borderRadius : 100,
        padding : 20
    }
})