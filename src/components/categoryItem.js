import { Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const CategoryItem = ({ item, index }) => {
    return (
        <TouchableOpacity>
            <ImageBackground source={{ uri: item.download_url }} resizeMethod='resize' resizeMode="cover" style={styles.imageBackground} imageStyle={styles.imgStyle} blurRadius={5}>

                <LinearGradient colors={['#080919' + 14, '#080919' + 12, '#080919']}
                    style={styles.linearGradient}>
                    <Text style={styles.text}>Category {index}</Text>
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    imageBackground: {
        marginRight: 5, width: 100, height: 65
    },
    imgStyle: {
        borderRadius: 5
    },
    linearGradient: {
        maxHeight: 65, flexDirection: 'row', flex: 1, borderRadius: 5, justifyContent: 'center'
    },
    text: {
        color: '#fff', alignSelf: 'flex-end', alignItems: 'center', paddingBottom: 5, fontSize: 12
    }
});


export default CategoryItem;
