import { DefaultTheme, Provider as PaperProvider }  from 'react-native-paper';
import Main from './src/main';
import { GlobalContextProvider } from './src/context'


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
      <GlobalContextProvider>
        <Main />
      </GlobalContextProvider>
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
