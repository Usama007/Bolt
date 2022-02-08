import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import { Divider, Subheading } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../components/cartItem';
import CustomButton from '../components/customButton';
import { addToCart, decreaseQtn, removeFromCart } from '../redux/cartSlice';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'


const CheckOut = ({ navigation }) => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const [subtotal, setsubtotal] = useState(0);
    const [discount, setdiscount] = useState(5);
    const [shipping, setshipping] = useState(2);
    const [total, settotal] = useState(0);


    useEffect(() => {
        calculateTotal();
        if (cart.badgeCount == 0) {
            navigation.goBack()
        }
    }, [cart]);

    const calculateTotal = () => {
        let tempTotal = 0;
        cart.cartItem.map((item) => {
            tempTotal += (parseFloat(item.price) * item.quantity);
        })
        setsubtotal(tempTotal);
        settotal(tempTotal + shipping - discount)
    }

    const onPressAdd = (item) => {
        dispatch(addToCart(item))
    }

    const onPressDecrese = (item) => {
        dispatch(decreaseQtn(item))
    }

    const onPressRemove = (item) => {
        dispatch(removeFromCart(item))
    }

    return (
        <ScrollView style={styles.container}>
            <Header headerTitle={'Checkout'} isBackBtn={true} onPress={() => {
                navigation.goBack();
            }} />

            {/* <Text>{counter}</Text> */}

            <View style={{ alignSelf: 'center' }}>
                <CountdownCircleTimer
                    isPlaying
                    size={110}
                    duration={20}
                    strokeWidth={6}
                    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                    colorsTime={[20, 15, 10, 5]}
                    onComplete={() => {
                        navigation.goBack()
                    }}
                >
                    {({ remainingTime }) => (
                        <>
                            <Text style={{ fontSize: 12 }}>Redirect within</Text>
                            <Text>{remainingTime}s</Text>
                        </>
                    )}
                </CountdownCircleTimer>
            </View>

            {cart.cartItem.length > 0 && (

                <ScrollView>
                    {cart.cartItem.map((item, index) => (
                        <CartItem key={item.id} item={item} onPressAdd={onPressAdd} onPressDecrese={onPressDecrese} onPressRemove={onPressRemove} />
                    ))}
                    <Subheading>
                        Shewrapara, Mirpur, Dhaka-1216 House no: 938 Road no: 9
                    </Subheading>
                    <Divider style={{ marginVertical: 10 }} />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                        <Text>Subtotal</Text>
                        <Text>${subtotal?.toFixed(2)}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                        <Text>Discount</Text>
                        <Text>${discount?.toFixed(2)}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                        <Text>Shipping</Text>
                        <Text>${shipping?.toFixed(2)}</Text>
                    </View>
                    <Divider style={{ marginVertical: 10 }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                        <Text style={{ color: '#000', fontSize: 15 }}>Total</Text>
                        <Text style={{ color: '#000', fontSize: 15 }}>${total?.toFixed(2)}</Text>
                    </View>

                    <CustomButton text={'Confirm Order'} customStyle={{ fontSize: 16 }} />

                </ScrollView>


            )}


        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        backgroundColor: '#fff'
    }
});


export default CheckOut;
