import React from 'react'
import { Dimensions, FlatList, ScrollView, StatusBar, StyleSheet } from 'react-native';
import HomeScreenHeader from '@/src/components/homescreen/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { useSharedValue, interpolate, Extrapolation, useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated';
import { View } from '@/src/components/Themed';
import { useRef } from 'react';
import StorySection from '@/src/components/story';
import Post from '@/src/components/post/Post';

const { width } = Dimensions.get("screen");

const PostSeperator = () => {
  return <View style={{ height: 10, width }} />
}

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

      <FlatList
        data={Array.from(Array(3).keys())}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={PostSeperator}
        automaticallyAdjustsScrollIndicatorInsets={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ index }) => {
          return <Post key={index} />
        }}
        ListHeaderComponent={() => <>
          <View style={{ height: 45, width: "100%" }} /><StorySection /></>}
        onScroll={(e) => {
          const y = e?.nativeEvent?.contentOffset?.y;
          const scrollingDown = y > scrollYRef?.current;

          if (scrollingDown && y > 50) {
            scrollY.value = withTiming(y);
          } else if (!scrollingDown) {
            scrollY.value = withTiming(0);
          }
          scrollYRef.current = y;
        }}
      />
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
