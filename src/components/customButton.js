import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const CustomButton = ({ text, onPress,customStyle={} }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }} colors={['#667EEA', '#658DF0', '#659BF5', '#64B6FF']} style={styles.linearGradient}>
                <Text style={[styles.buttonText,customStyle]}>
                    {text}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    linearGradient: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginBottom: 10,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 14,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});


export default CustomButton;
