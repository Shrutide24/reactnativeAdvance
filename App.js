import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Index from './firebase';
import SignIn from './firebase/signIn';
import SignUp from './firebase/signUp';
import Navigator from './firebase/navigation';
import Home from './firebase/Home';
import ProductInfo from './firebase/productInfo';


export default function App() {
  return (
    // <Index/>
    // <SignIn />
    // <SignUp/>
    // <Navigator/>
    // <Home/>
    <ProductInfo/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
