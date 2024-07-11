import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
  ReduceMotion,
} from 'react-native-reanimated';

const duration = 1000;

interface appProps {
  width: number;
}

const FourthAnimation = ({width}: appProps) => {
  const defaultAnim = useSharedValue<number>(100);
  const linear = useSharedValue<number>(100);

  const animatedDefault = useAnimatedStyle(() => ({
    transform: [{translateX: defaultAnim.value}],
  }));

  const animatedLinear = useAnimatedStyle(() => ({
    transform: [{translateX: linear.value}],
  }));

  useEffect(() => {
    linear.value = withRepeat(
      withTiming(-linear.value, {
        duration,
        easing: Easing.linear,
      }),
      -1,
      true,
    );
    defaultAnim.value = withRepeat(
      withTiming(-defaultAnim.value, {
        duration,
        easing: Easing.elastic(2),
        reduceMotion: ReduceMotion.Never,
      }),
      -1,
      true,
    );
  }, []);
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedDefault]}>
        <Text style={styles.text}>def</Text>
      </Animated.View>
      <Animated.View style={[styles.box, animatedLinear]}>
        <Text style={styles.text}>linear</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  box: {
    height: 80,
    width: 80,
    margin: 20,
    borderWidth: 1,
    borderColor: '#b58df1',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#b58df1',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default FourthAnimation;
