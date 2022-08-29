import React from 'react';
import { View, StyleSheet } from 'react-native';

function PaddingAndMarginScreen(props) {
    return (
        <View style={styles.container}>
            <View style = {styles.dodgerBlueBox} >
                <View style = { styles.goldBox }></View>
            </View>
            <View style = {styles.tomatoBox} >
                <View style = { styles.goldBox }></View>
            </View>
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
        padding: 20
    },
    goldBox: {
        width: 50,
        height: 50,
        backgroundColor: 'gold',
    },
    tomatoBox: {
        width: 100,
        height: 100,
        backgroundColor: 'tomato',
        margin: 20
    }
})

export default PaddingAndMarginScreen;