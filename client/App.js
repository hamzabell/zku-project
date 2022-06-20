import { DefaultTheme, Provider as PaperProvider }  from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/main';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow'
  }
}

export default function App() {
  return (
    <PaperProvider>
      <Main />
    </PaperProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
