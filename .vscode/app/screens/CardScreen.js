import React from 'react';
import { View } from 'react-native';

import Card from '../components/Card';

function CardScreen(props) {
    return (
        <View style={{
            backgroundColor: "#f8f4f4",
            padding: 20,
            paddingTop: 100
        }}>
            <Card 
                title = "Red jacket for sale"
                subTitle = "$100"
                image = {require('../assets/jacket.jpg')}
            />
        </View>
    );
}

export default CardScreen;