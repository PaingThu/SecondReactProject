import React from 'react';
import { View, StyleSheet } from 'react-native';

function BorderScreen(props) {
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
        borderWidth: 10,
        borderColor: 'royalblue',
        borderRadius: 50,
        // borderTopWidth: 20,
        // borderTopLeftRadius: 50,
    }
})

export default BorderScreen;