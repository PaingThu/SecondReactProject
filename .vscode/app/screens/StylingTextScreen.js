import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function StylingTextScreen(props) {
    return (
        <View
            style={styles.container}
        >
            <Text> I Love React Native! </Text>
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