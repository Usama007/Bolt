import { View,StyleSheet} from 'react-native';
import React, { useState } from 'react';
import {Snackbar, TextInput } from 'react-native-paper';
import CustomButton from '../components/customButton';
import Header from '../components/header';

const Login = ({ navigation }) => {
    const [phoneNo, setphoneNo] = useState('');
    const [showSnackbar, setshowSnackbar] = useState(false);
    const [snackbarMesage, setsnackbarMesage] = useState('');

    const onPressLogin = () => {
        if (phoneNo != '') {
            navigation.navigate('Otp');
        } else {
            setsnackbarMesage('Phone number is required');
            setshowSnackbar(true);
        }
    }
    return (
        <View style={styles.container}>
            <Header headerTitle={'Login'} isBackBtn={true} onPress={() => {
                navigation.goBack();
            }} />
            <TextInput
                label="Phone"
                autoFocus={true}
                keyboardType='phone-pad'
                mode='flat'
                style={styles.textInput}
                activeUnderlineColor='#b8b8b8'
                value={phoneNo}
                onSubmitEditing={onPressLogin}
                onChangeText={setphoneNo}
            />
            <CustomButton text={'Login'} onPress={onPressLogin} />

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


export default Login;
