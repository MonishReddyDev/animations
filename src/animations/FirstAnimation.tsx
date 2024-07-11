import {View, Text, SafeAreaView, Button, StyleSheet} from 'react-native';
import React from 'react';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';

const FirstAnimation = () => {
  const width = useSharedValue<number>(100);
  const handelPress = () => {
    width.value = withSpring(width.value + 10);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Animated.View style={{...styles.box, width}} />
        <Button title="click me" onPress={handelPress} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 100,
    backgroundColor: 'violet',
    borderRadius: 10,
  },
});
export default FirstAnimation;
