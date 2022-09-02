import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import AppText from './.vscode/app/components/AppText';
import Icon from './.vscode/app/components/Icon';
import ListItem from './.vscode/app/components/ListItem';
import Screen from './.vscode/app/components/Screen';
import AccountScreen from './.vscode/app/screens/AccountScreen';
import BorderScreen from './.vscode/app/screens/BorderScreen';
import CardScreen from './.vscode/app/screens/CardScreen';
import EncapsulatingStyleScreen from './.vscode/app/screens/EncapsulatingStyleScreen';
import IconScreen from './.vscode/app/screens/IconScreen';
import ListingDetailsScreen from './.vscode/app/screens/ListingDetailsScreen';
import ListingsScreen from './.vscode/app/screens/ListingsScreen';
import MessagesScreen from './.vscode/app/screens/MessagesScreen';
import PaddingAndMarginScreen from './.vscode/app/screens/PaddingAndMarginScreen';
import ShadowScreen from './.vscode/app/screens/ShadowScreen';
import StylingTextScreen from './.vscode/app/screens/StylingTextScreen';
import ViewImageSreen from './.vscode/app/screens/ViewImageSreen';
import WelcomeScreen from './.vscode/app/screens/WelcomeScreen';
import AppTextInput from './.vscode/app/components/AppTextInput';


export default function App() {
    const [firstName, setFirstName] = useState('')
    return (
        <Screen>
            <AppTextInput 
                icon='email' 
                placeholder='Email'
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
})
