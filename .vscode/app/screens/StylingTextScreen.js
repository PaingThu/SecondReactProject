import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function StylingTextScreen(props) {
    return (
        <View
            style={styles.container}
        >
            <Text style = {{
                // fontFamily: 'Courier',
                fontSize: 30,
                fontStyle: 'italic',
                fontWeight: 'bold',
                color: 'tomato',
                textTransform: 'capitalize',
                textAlign: 'center',
                lineHeight: 30,

            }}> I love react native! This is my first react native app! Here is some more text.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default StylingTextScreen;