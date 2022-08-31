import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import AppText from './.vscode/app/components/AppText';
import BorderScreen from './.vscode/app/screens/BorderScreen';
import CardScreen from './.vscode/app/screens/CardScreen';
import EncapsulatingStyleScreen from './.vscode/app/screens/EncapsulatingStyleScreen';
import IconScreen from './.vscode/app/screens/IconScreen';
import ListingDetailsScreen from './.vscode/app/screens/ListingDetailsScreen';
import MessagesScreen from './.vscode/app/screens/MessagesScreen';
import PaddingAndMarginScreen from './.vscode/app/screens/PaddingAndMarginScreen';
import ShadowScreen from './.vscode/app/screens/ShadowScreen';
import StylingTextScreen from './.vscode/app/screens/StylingTextScreen';
import ViewImageSreen from './.vscode/app/screens/ViewImageSreen';
import WelcomeScreen from './.vscode/app/screens/WelcomeScreen';


export default function App() {
  return (
      <MessagesScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
})
