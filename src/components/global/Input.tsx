import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/Feather';

const Input = ({ onChange, value, onToggle, isVisible, iconvalue, placeholder, secureTextEntry }: { isVisible: boolean, onChange: (e: any) => void, value: string, onToggle?: () => void, iconvalue?: boolean, placeholder: string, secureTextEntry: boolean }) => {
    return (
        <View style={styles.input} >
            <TextInput secureTextEntry={secureTextEntry} placeholderTextColor={'grey'} placeholder={placeholder} style={styles.inputtext} onChangeText={onChange} value={value} />
            {isVisible && <TouchableOpacity onPress={onToggle} >
                {iconvalue ? <View style={styles.marginRight} >
                    <Icon name="eye-off" color={'black'} size={25} />
                </View> : <View style={styles.marginRight} >
                    <Icon name="eye" color={'black'} size={25} />
                </View>}
            </TouchableOpacity>}
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    marginRight: {
        marginRight: 10,
    },
    input: {
        borderWidth: 2,
        borderColor: 'rgba(88,88,88,0.1)',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    inputtext: {
        color: 'black',
        paddingHorizontal: 10,
        paddingVertical: 10,
        flex: 1,
        fontSize: 15,
        fontWeight: '500',
    },
});
