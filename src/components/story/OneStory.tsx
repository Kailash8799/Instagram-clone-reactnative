import { StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { LinearGradient } from "expo-linear-gradient";

const OneStory = ({ isShown }: { isShown: boolean }) => {
    const navigation = useRouter()
    const colorScheme = useColorScheme();
    const storycolor = isShown ? ["grey", "grey", "grey"] : ["#bc2a8d", "#e95950", "#fccc63"]
    const paddingColor = colorScheme === "dark" ? ["black", "black", "black"] : ["#fff", "#fff", "#fff"]
    const openStory = () => {
        navigation.navigate('storyview')
    }
    return (
        <View style={styles.maincontainer} >
            <View style={styles.container} >
                <LinearGradient
                    colors={storycolor}
                    style={{ borderRadius: 100, padding: 3 }}
                >
                    <LinearGradient
                        colors={paddingColor}
                        style={{ borderRadius: 100, padding: 2 }}
                    >
                        <TouchableOpacity onPress={openStory} activeOpacity={0.9} style={[styles.story]} >
                        </TouchableOpacity>

                    </LinearGradient>
                </LinearGradient>
            </View>
            <View>
                <Text numberOfLines={1} style={styles.text} >kailash87990000</Text>
            </View>
        </View>
    )
}

export default OneStory

const styles = StyleSheet.create({
    container: {
        height: 90,
        width: 90,
    },
    maincontainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 94,
    },
    story: {
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: "red",
    },
    text: { color: '#fff', marginTop: 2, }
})