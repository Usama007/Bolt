import { Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import api from '../misc/api';
import CategoryItem from '../components/categoryItem';
import ProductItem from '../components/productListItem';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const Product = ({ navigation }) => {

    const dispatch = useDispatch();
    const [categories, setcategories] = useState([]);
    const [featured, setfeatured] = useState([]);
    const [bestSells, setbestSells] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            let cat = await api.get("list", {
                params: {
                    page: 2,
                    limit: 10
                }
            })

            let featured = await api.get("list", {
                params: {
                    page: 3,
                    limit: 10
                }
            })

            let best = await api.get("list", {
                params: {
                    page: 4,
                    limit: 10
                }
            })


            setcategories(cat.data);
            setfeatured(featured.data);
            setbestSells(best.data);
            setloading(false);

        } catch (error) {
            console.log(error)
            setloading(false);
        }
    }


    const onPressItem = (item) => {
        dispatch(addToCart(item))
    }


    return (
        <ScrollView style={styles.container} contentContainerStyle={{ justifyContent: 'space-around',flex:1 }}>

            {loading ? (
                <ActivityIndicator size={'large'} color='#64B6FF' style={{ alignSelf:'center' }} />
            ) : (
                <>
                    <Header headerTitle={'Categories'} isBackBtn={false} onPress={() => {
                        navigation.navigate('CheckOut');
                    }} />

                    {categories.length > 0 && (
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {categories.map((item, index) => (

                                <CategoryItem key={item.id} item={item} index={index} />
                            ))}
                        </ScrollView>
                    )}

                    <Text style={styles.headerText}>Featured</Text>
                    {featured.length > 0 && (
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {featured.map((item, index) => (
                                <ProductItem key={item.id} item={item} index={index} onPress={onPressItem} />
                            ))}
                        </ScrollView>
                    )}

                    <Text style={styles.headerText}>Best Sell</Text>
                    {bestSells.length > 0 && (
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {bestSells.map((item, index) => (
                                <ProductItem key={item.id} item={item} index={index} onPress={onPressItem} />
                            ))}
                        </ScrollView>
                    )}

                </>
            )}


        </ScrollView>
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
    headerText: {
        fontSize: 24,
        color: '#000',
        marginBottom: '2%',
        marginTop: '5%'
    },
});


export default Product;
