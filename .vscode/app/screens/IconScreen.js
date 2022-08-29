import React from 'react';
import { View, StyleSheet } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';


function IconScreen(props) {
    return (
        <View
            style={styles.container}
        >
            <MaterialCommunityIcons name='email' size={200} color='dodgerblue'/>
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

export default IconScreen;