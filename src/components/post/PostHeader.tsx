import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native'
import { Image } from 'expo-image';
import { Feather } from '@expo/vector-icons';
const { width } = Dimensions.get("screen");
import { blurhash, constimage } from "@/src/constants/constant";


const PostHeader = () => {
    const colorSheme = useColorScheme();
    const color = colorSheme === "dark" ? "#fff" : "#000"
    return (
        <View style={styles.container} >
            <TouchableOpacity activeOpacity={0.8} style={styles.header} >
                <View>
                    <Image
                        style={styles.image}
                        source={constimage}
                        placeholder={blurhash}
                        contentFit="cover"
                        transition={1000}
                    />
                </View>
                <View style={styles.spacer} />
                <View>
                    <Text style={[styles.text, { color }]} >kailash8799</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} >
                <Feather name="more-vertical" size={24} color={colorSheme === "dark" ? "#fff" : "#000"} />
            </TouchableOpacity>
        </View>
    )
}

export default PostHeader

const styles = StyleSheet.create({
    container: {
        height: 45,
        width,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    image: {
        height: 40,
        width: 40,
        backgroundColor: '#0553',
        borderRadius: 50,
    },
    spacer: {
        width: 5,
    },
    text: {
        fontSize: 15,
    }
})