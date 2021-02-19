import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Card = () => {
    return(
        <View style={styles.card}>
            <View style={styles.imageWrapper}>
                <Image 
                    // source={require('../../assets/news-demo.jpg')}
                    source={{uri: 'https://www.via-ks.com/wp-content/uploads/2017/01/news-images-3.jpg'}}
                    style={styles.image}
                />
            </View>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>Title Here</Text>
            </View>
            <View style={styles.descriptionWrapper}>
                <Text style={styles.description}>This line here gonna be description</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        height: 300,
        margin: 20,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageWrapper: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    title: {
        fontFamily: 'JosefinsansBold',
        fontSize: 20,
        marginTop: 10
    },
    description: {
        fontFamily: 'JosefinsansLight',
        fontSize: 15,
        marginTop: 10
    },
    titleWrapper: {
        height: '10%',
        paddingHorizontal: 15
    },
    descriptionWrapper: {
        paddingHorizontal: 15
    }
});

export default Card;