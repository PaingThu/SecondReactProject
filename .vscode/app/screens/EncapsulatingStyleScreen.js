import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import AppText from '../components/AppText';

function EncapsulatingStyleScreen(props) {
    return (
        <View
            style={styles.container}
        >
            <AppText > I love react native! </AppText>
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

export default EncapsulatingStyleScreen;