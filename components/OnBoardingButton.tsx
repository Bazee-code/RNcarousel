import { View, StyleSheet, Animated, TouchableOpacity} from 'react-native'
import { useEffect, useRef } from 'react'
import Svg, { G, Circle } from 'react-native-svg'
import { AntDesign } from '@expo/vector-icons'

type onBoardingButtonProps = {
    percentage : Animated.Value | number,
    scrollTo : () => void
}

const OnBoardingButton = ({percentage, scrollTo} : onBoardingButtonProps) => {
    const size = 128
    const strokeWidth = 2
    const center = size / 2
    const radius = size / 2 - strokeWidth / 2
    const circumference = 2 * Math.PI * radius

    const progressAnimation = useRef(new Animated.Value(0)).current;
    const progressRef = useRef(null)

    const animation = (toValue : Animated.Value) => {
        return Animated.timing(progressAnimation, {
            toValue,
            duration : 250,
            useNativeDriver : true
        }).start()
    }

    useEffect(()=>{
        animation(percentage)
    },[percentage])

    useEffect(() => {
        progressAnimation.addListener((value)=>{
            const strokeDashoffset = circumference - (circumference * value.value) / 100

            if(progressRef?.current){
                progressRef.current.setNativeProps({
                    strokeDashoffset
                });
            }
    },
        [percentage]
    );

    return () => {
        progressAnimation.removeAllListeners()
    };
    },[])

    return (
        <View style={styles.container}>
            <Svg height={size} width={size}>
                <G rotation={-90} origin={center}>
                    <Circle cx={center} cy={center} r={radius} stroke="#E6E7EB" strokeWidth={strokeWidth} />
                    <Circle 
                        ref={progressRef}
                        cx={center} 
                        cy={center} 
                        r={radius} 
                        stroke="#00008B" 
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        />
                </G>
            </Svg>

            <TouchableOpacity style={styles.button} onPress={scrollTo}>
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