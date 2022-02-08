import {  ImageBackground, StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Avatar, Button, Card,Text,  Paragraph } from 'react-native-paper';


const ProductItem = ({ item, index,onPress }) => {

    return (
        <TouchableOpacity style={{flexDirection:'column'}} onPress={()=>onPress(item)}>
            <Image
                source={{ uri: item.download_url }} resizeMethod='resize'
                resizeMode="cover" 
                style={{ height:200, width: 150, borderRadius: 5, marginRight: 10,marginBottom:5 }}

            />
            <Text>${(item.id / 3).toFixed(2)}</Text>
            <Text>{item.author}</Text>
        </TouchableOpacity>       
    );
};

const styles = StyleSheet.create({

});


export default ProductItem;
