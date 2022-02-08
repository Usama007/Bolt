import { View, StyleSheet, Image,Text } from 'react-native';
import React from 'react';
import CustomButton from '../components/customButton';


const Welcome = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>
                Welcome to Bolt
            </Text>
            <Image
                source={require('../assets/images/welcome.png')}
                style={styles.image}
            />
            <View style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <CustomButton text={'Login with Phone'} onPress={()=>{
                   navigation.navigate('Login')
                }}/>
                <Text>
                    Shop with us
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    welcomeText: {
        fontSize: 18
    },
    image: {
        height: 200,
        resizeMode: 'cover',
    },

});


export default Welcome;
