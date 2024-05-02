import { View, Text, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native'
import React from 'react'
import { useThemeConstant } from '@/src/hooks/useThemeConstant'
import { AntDesign, Feather } from '@expo/vector-icons';

const HomeScreenHeader = () => {
    const { commonTheme } = useThemeConstant();
    const colorScheme = useColorScheme();
    return (
        <View
            style={{
                position: "absolute",
                top: 0,
                right: 0,
                left: 0,
                height: 45,
                flexDirection: "row",
                backgroundColor: 'black',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 10,
            }}
        >
            <View>
                <Text style={[{ fontSize: 25 }, commonTheme]} >
                    Instagram
                </Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                <TouchableOpacity style={{ marginRight: 15 }} activeOpacity={0.6}>
                    <Feather
                        name="heart"
                        size={26}
                        color={colorScheme === "dark" ? "white" : "black"}
                    />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}>
                    <AntDesign
                        name="message1"
                        size={24}
                        color={colorScheme === "dark" ? "white" : "black"}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeScreenHeader

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: 'red'
    },
})
