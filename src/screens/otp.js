import { View,  StyleSheet } from 'react-native';
import React, { useState } from 'react';
import {  Snackbar, TextInput } from 'react-native-paper';
import CustomButton from '../components/customButton';
import Header from '../components/header';

const Otp = ({ navigation }) => {
    const [otp, setotp] = useState('');
    const [showSnackbar, setshowSnackbar] = useState(false);
    const [snackbarMesage, setsnackbarMesage] = useState('');

    const onPressVerify = () => {
        if (otp != '') {
            navigation.navigate('Product');
        } else {
            setsnackbarMesage('OTP is required');
            setshowSnackbar(true);
        }
    }
    return (
        <View style={styles.container}>
            <Header headerTitle={'Verify'} isBackBtn={true} onPress={() => {
                navigation.goBack();
            }} />
            <TextInput
                label="Otp"
                autoFocus={true}
                keyboardType='default'
                mode='flat'
                style={styles.textInput}
                activeUnderlineColor='#b8b8b8'
                value={otp}
                onSubmitEditing={onPressVerify}
                onChangeText={setotp}
            />
            <CustomButton text={'Verify'} onPress={onPressVerify} />

            <Snackbar
                visible={showSnackbar}
                onDismiss={() => {
                    setshowSnackbar(false);
                    setsnackbarMesage('')
                }}
            >
                {snackbarMesage}
            </Snackbar>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        paddingHorizontal: 16,

    },   
    textInput: {
        backgroundColor: '#fff',
        marginBottom: '20%',
        fontSize: 14
    },
    
});


export default Otp;
