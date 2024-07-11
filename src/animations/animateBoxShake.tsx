import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

const AnimateBoxShake = () => {
  const screenWidth = Dimensions.get('window').width;
  const offset = useSharedValue<number>(0);
  const style = useAnimatedStyle(() => ({
    transform: [{translateX: offset.value}],
  }));

  const OFFSET = 10;
  const TIME = 50;

  const DELAY = 400;

  const handleshake = () => {
    offset.value = withDelay(
      DELAY,
      withSequence(
        withTiming(-OFFSET, {duration: TIME / 2}),
        withRepeat(withTiming(OFFSET, {duration: TIME}), 3, true),
        withTiming(0, {duration: TIME / 2}),
      ),
    );
  };

  // offset.value = withRepeat(withTiming(screenWidth - 100), 50, true);
  // offset.value = withRepeat(withTiming(5), 50, true);
  // start from -OFFSET

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, style]}></Animated.View>
      <TouchableOpacity style={styles.btn} onPress={handleshake}>
        <Text style={styles.text}>Shake It</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  box: {
    height: 100,
    width: 100,
    borderRadius: 30,
    backgroundColor: 'green',
  },
  btn: {
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 20,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AnimateBoxShake;
