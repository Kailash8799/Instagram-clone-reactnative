import { ScrollView, StatusBar, StyleSheet } from 'react-native';
import HomeScreenHeader from '@/src/components/homescreen/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { useSharedValue, interpolate, Extrapolation, useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated';
import { Text, View } from '@/src/components/Themed';
import { useRef } from 'react';

export default function HomeTab() {
  const scrollY = useSharedValue(0);
  const scrollYRef = useRef(0);
  const animatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(scrollY.value, [0, 50], [0, -50], Extrapolation.CLAMP);
    return {
      transform: [{ translateY: translateY }],
      elevation: 1,
      zIndex: 100,
    };
  });
  return (
    <SafeAreaView>
      <Animated.View
        style={[animatedStyle]}
      >
        <HomeScreenHeader />
      </Animated.View>
      <ScrollView onScroll={(e) => {
        const y = e?.nativeEvent?.contentOffset?.y;
        const scrollingDown = y > scrollYRef?.current;

        if (scrollingDown && y > 50) {
          scrollY.value = withTiming(y);
        } else if (!scrollingDown) {
          scrollY.value = withTiming(0);
        }

        scrollYRef.current = y;
      }}>
        <View style={{ height: 45, width: "100%" }} />
        <View style={{ height: 100 }}><Text style={{ color: 'red' }} >Hey</Text></View>
        <View style={{ height: 100 }}><Text style={{ color: 'red' }} >Hey</Text></View>
        <View style={{ height: 100 }}><Text style={{ color: 'red' }} >Hey</Text></View>
        <View style={{ height: 100 }}><Text style={{ color: 'red' }} >Hey</Text></View>
        <View style={{ height: 100 }}><Text style={{ color: 'red' }} >Hey</Text></View>
        <View style={{ height: 100 }}><Text style={{ color: 'red' }} >Hey</Text></View>
        <View style={{ height: 100 }}><Text style={{ color: 'red' }} >Hey</Text></View>
        <View style={{ height: 100 }}><Text style={{ color: 'red' }} >Hey</Text></View>
        <View style={{ height: 100 }}><Text style={{ color: 'red' }} >Hey</Text></View>
        <View style={{ height: 100 }}><Text style={{ color: 'red' }} >Hey</Text></View>
        <View style={{ height: 100 }}><Text style={{ color: 'red' }} >Hey</Text></View>
        <View style={{ height: 100 }}><Text style={{ color: 'red' }} >Hey</Text></View>
        <View style={{ height: 100 }}><Text style={{ color: 'red' }} >Hey</Text></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
