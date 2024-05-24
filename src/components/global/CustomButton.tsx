import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { CustomButtonType } from '@/src/types/type';

const CustomButton = ({ onClick, title, borderRadius, loading }: CustomButtonType) => {
    return (
        <View>
            <TouchableOpacity activeOpacity={0.6} style={[styles.container, { borderRadius: borderRadius }]} onPress={onClick} >
                <View style={styles.button} >
                    {loading ? <ActivityIndicator size={30} color={'#fff'} /> : <Text style={styles.text} >{title}</Text>}
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255,159,11,1)',
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        paddingVertical: 11,
    },
    text: {
        fontSize: 22,
        fontWeight: '500',
    },
});
