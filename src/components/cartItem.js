import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Card, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const CartItem = ({ item, onPressAdd, onPressDecrese, onPressRemove }) => {
    return (
        <Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
                <View style={{ flex: 1 }}>
                    <Image
                        source={{ uri: item.download_url }} resizeMethod="resize" resizeMode="cover"
                        style={styles.image}
                    />
                </View>
                <View style={{ flex: 1.6 }}>
                    <View style={styles.crossBtnWrapper}>
                        <Title>{item.author}</Title>
                        <TouchableOpacity onPress={() => {
                            onPressRemove(item)
                        }}>
                            <Icon name="close" size={20} color="#b8b8b8" style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                    <Text>Company name</Text>
                    <Title style={{ color: '#374ABE', fontSize: 16 }}>${item.price}</Title>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.btn} onPress={() => {
                            onPressDecrese(item)
                        }}>
                            <Entypo name="minus" size={20} color="#b8b8b8"  />
                        </TouchableOpacity>
                        <Text style={{ backgroundColor: '#F6F6F6', padding: 8 }}>{item.quantity}</Text>
                        <TouchableOpacity style={styles.btn} onPress={() => {
                            onPressAdd(item)
                        }}>
                            <Icon name="add" size={20} color="#b8b8b8" />
                        </TouchableOpacity>
                    </View>
                </View>
            </Card.Content>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        marginBottom: 5
    },
    cardContent:{
        flexDirection: 'row' 
    },
    image:{
        height: 125, width: 120, marginRight: 10, marginBottom: 5 
    },
    crossBtnWrapper:{
        flexDirection: 'row', justifyContent: 'space-between' 
    },
    btn:{
        backgroundColor: '#F6F6F6', padding: 8 
    }
  
});


export default CartItem;
