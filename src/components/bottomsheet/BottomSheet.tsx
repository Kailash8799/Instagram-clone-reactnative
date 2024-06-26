import React, { useCallback, useEffect, useImperativeHandle } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
    Extrapolation,
    interpolate,
    useAnimatedProps,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
} from "react-native-reanimated";

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("screen");
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 60;

type BottomSheetProps = {
    children?: React.ReactNode;
};
export type BottomSheetRefProps = {
    scrollTo: (destination: number) => void;
    isActive: () => boolean;
};

const BottomSheet = React.forwardRef<BottomSheetRefProps, BottomSheetProps>(
    ({ children }, ref) => {
        const translateY = useSharedValue(0);
        const active = useSharedValue(false);
        const context = useSharedValue({ y: 0 });

        const scrollTo = useCallback((destination: number) => {
            "worklet";
            active.value = destination !== 0;
            translateY.value = withSpring(destination, {
                damping: 50,
            });
        }, []);

        const isActive = useCallback(() => {
            return active.value;
        }, []);

        useImperativeHandle(ref, () => ({ scrollTo, isActive}), [scrollTo,isActive]);

        const gesture = Gesture.Pan()
            .onStart(() => {
                context.value = { y: translateY.value };
            })
            .onUpdate((event) => {
                translateY.value = event.translationY + context.value.y;
                translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
            })
            .onEnd(() => {
                if (translateY.value > -SCREEN_HEIGHT / 3) {
                    scrollTo(0);
                } else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
                    scrollTo(MAX_TRANSLATE_Y);
                } else {
                    scrollTo(-SCREEN_HEIGHT / 2);
                }
            });

        const rBottomSheetStyle = useAnimatedStyle(() => {
            const borderRadius = interpolate(
                translateY.value,
                [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
                [20, 15],
                Extrapolation.CLAMP
            );
            return {
                transform: [
                    {
                        translateY: translateY.value,
                    },
                ],
                borderRadius,
            };
        });

        const rBackdropStyle = useAnimatedStyle(() => {
            return {
                opacity: withTiming(active.value ? 1 : 0),
            };
        }, []);

        const rBackdropProps = useAnimatedProps(() => {
            return {
                pointerEvents: active.value ? "auto" : "none",
            } as any;
        }, []);

        return (
            <>
                <Animated.View
                    onTouchStart={() => {
                        scrollTo(0);
                    }}
                    animatedProps={rBackdropProps}
                    style={[
                        {
                            ...StyleSheet.absoluteFillObject,
                            backgroundColor: "rgba(0,0,0,0.7)",
                        },
                        rBackdropStyle,
                    ]}
                />
                <GestureDetector gesture={gesture}>
                    <Animated.View
                        style={[styles.bottomSheetContainer, rBottomSheetStyle]}
                    >
                        <View style={styles.line} />
                        {children}
                    </Animated.View>
                </GestureDetector>
            </>
        );
    }
);

export default BottomSheet;

const styles = StyleSheet.create({
    bottomSheetContainer: {
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
        backgroundColor: "#fff",
        position: "absolute",
        top: SCREEN_HEIGHT,
        borderRadius: 15,
    },
    line: {
        width: 75,
        height: 4,
        backgroundColor: "grey",
        alignSelf: "center",
        marginVertical: 15,
        borderRadius: 2,
    },
});
