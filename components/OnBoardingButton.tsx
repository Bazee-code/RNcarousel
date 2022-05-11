import { View, StyleSheet, Text, Animated} from 'react-native'
import Svg, { G, Circle } from 'react-native-svg'

const OnBoardingButton = () => {
    const size = 128
    const strokeWidth = 2
    const center = size / 2
    const radius = size / 2 - strokeWidth / 2
    const circumference = 2 * Math.PI * radius

    return (
        <View style={styles.container}>
            <Svg height={size} width={size}>
                <G rotation={-90} origin={center}>
                    <Circle cx={center} cy={center} r={radius} stroke="#E6E7EB" strokeWidth={strokeWidth} />
                    <Circle cx={center} cy={center} r={radius} stroke="#00008B" strokeWidth={strokeWidth}
                        strokeDasharray={circumference} strokeDashoffset={circumference - (circumference*25) / 100} />
            </G>
            </Svg>
        </View>
    )
}

export default OnBoardingButton

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})