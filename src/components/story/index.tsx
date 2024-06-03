import React from "react";
import { View, Text, StyleSheet, FlatList, useColorScheme } from "react-native";
import OneStory from "./OneStory";

const StorySeperator = () => {
    return <View style={{ width: 4 }} />;
};

const StorySection = () => {
    const colorScheme = useColorScheme();
    return (
        <View
            style={[
                styles.container,
                {
                    borderBottomColor:
                        colorScheme === "dark" ? "#362f2f" : "#ded9d9",
                },
            ]}
        >
            <FlatList
                horizontal={true}
                data={[1, 2, 3, 4, 5, 6, 7, 8]}
                renderItem={({ index }) => {
                    return <OneStory isShown={index % 2 === 0} key={index} />;
                }}
                contentContainerStyle={{ paddingHorizontal: 10 }}
                ItemSeparatorComponent={StorySeperator}
                automaticallyAdjustsScrollIndicatorInsets={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default StorySection;

const styles = StyleSheet.create({
    container: {
        height: 120,
        borderBottomWidth: 0.2,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
});
