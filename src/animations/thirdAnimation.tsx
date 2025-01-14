import React from 'react';
import {Button, View, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
  withSpring,
} from 'react-native-reanimated';
import {Svg, Circle} from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const ThirdAnimation = () => {
  const r = useSharedValue<number>(20);
  const handlePress = () => {
    r.value += 10;
  };

  const animatedProps = useAnimatedProps(() => ({
    r: withTiming(r.value),
  }));

  return (
    <View style={styles.container}>
      <Svg style={styles.svg}>
        <AnimatedCircle
          cx="50%"
          cy="50%"
          fill="#b58df1"
          animatedProps={animatedProps}
        />
      </Svg>
      <Button onPress={handlePress} title="Click me" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  svg: {
    height: 250,
    width: '100%',
  },
});
export default ThirdAnimation;
