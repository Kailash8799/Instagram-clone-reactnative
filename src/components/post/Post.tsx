import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { Image } from 'expo-image';
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import { blurhash, constimage } from "@/src/constants/constant";


const { width } = Dimensions.get("screen");
const Post = () => {
    return (
        <View>
            <PostHeader />
            <View >
                <Image
                    style={styles.image}
                    source={constimage}
                    placeholder={blurhash}
                    contentFit="cover"
                    transition={1000}
                />
            </View>
            <PostFooter />
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        width: width,
        aspectRatio: 1,
        backgroundColor: '#0553',
    },
});
