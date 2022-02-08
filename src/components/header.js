import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { Badge } from 'react-native-paper';
import { useSelector } from 'react-redux';


const Header = ({ headerTitle, onPress, isBackBtn }) => {
    const cart = useSelector(state => state.cart);
    return (
        <>

            {isBackBtn ? (
                <TouchableOpacity onPress={onPress}>
                    <Icon name="keyboard-backspace" size={30} color="#b8b8b8" style={styles.backButton} />
                </TouchableOpacity>

            ) : (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => { }}>
                        <Icon name="menu" size={30} color="#b8b8b8" style={styles.backButton} />
                    </TouchableOpacity>
                    {cart.badgeCount > 0 && (
                        <TouchableOpacity onPress={onPress}>
                            <Badge style={styles.badge} >{cart.badgeCount}</Badge>
                            <Icon name="shopping-cart" size={30} color="#b8b8b8" style={styles.backButton} >

                            </Icon>
                        </TouchableOpacity>
                    )}

                </View>

            )}

            <Text style={styles.headerText}>{headerTitle}</Text>
        </>
    );
};
const styles = StyleSheet.create({
    backButton: {
        paddingVertical: 20
    },
    headerText: {
        fontSize: 24,
        color: '#000',
        marginBottom: '2%'
    },
    badge: {
        position: 'absolute', right: 0, top: 9, zIndex: 2, color: '#fff', backgroundColor: '#64B6FF'
    }
});


export default Header;
