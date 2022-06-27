import {KeyboardAvoidingView, FlatList , StyleSheet } from 'react-native';
import Cell from './Cell.js';
import { useGlobalContext } from '../context';


const Gamegrid = () => {

    const [state, dispatch ] = useGlobalContext();

    const renderItem = ({ item, index }) => (
        <Cell title={item} index={index} />
    );

    return (
        <KeyboardAvoidingView style={styles.gameBoard}>
                <FlatList 
                    numColumns={state.data.row} 
                    data={state.data.puzzle} 
                    renderItem= {renderItem}
                    keyExtractor={(item, index) => index}
                />


        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
     gameBoard: {
        alignItems: 'center',
        marginTop: 80,
        height: '58%',
        maxHeight: '60%'
    },
})

export default Gamegrid;