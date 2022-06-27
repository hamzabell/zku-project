import * as React from 'react';
import { SafeAreaView, StyleSheet, View, FlatList, StatusBar, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-paper';
import { GameGrid, Timer } from './components';
import { useGlobalContext } from './context';

import { AppService as appService } from './services';


const Main = ()  => {
    const [state, dispatch] = useGlobalContext();

    const onSubmit = () => {
        const isValid = appService.validateSolution(state.data.puzzle, state.data.col, state.data.toFill);
        isValid ? alert('You are awesome') : alert('Solution Provided is not valid!')
    }
    return (
        <SafeAreaView style={styles.container} >

            <Timer />

            <GameGrid  />
           
            <Button mode='contained' 
                style={styles.buttonStyle} disabled={state.hasEnded} 
                onPress={onSubmit}
            >  
                Submit Solution
            </Button>

            <Button mode='outlined' style={{...styles.buttonStyle, marginTop: 20 }} onPress={() => state.reset ? state.reset() : console.log('not there')} >Reset Game</Button>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight + 20 || 0,

    },
    buttonStyle: {
        marginHorizontal: 25,
        height: 45,
        paddingTop: 5,
        alignItems:  'center'
    },
 
})

export default Main;