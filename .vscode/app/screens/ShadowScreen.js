import React from 'react';
import { View, StyleSheet } from 'react-native';

function ShadowScreen(props) {
    return (
        <View
            style={styles.container}
        >
            <View
                style = {styles.dodgerBlueBox}
            ></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dodgerBlueBox: {
        width: 100,
        height: 100,
        backgroundColor: 'dodgerblue',
        shadowColor: 'grey',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 20,
    }
})

export default ShadowScreen;