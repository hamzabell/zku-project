import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { useGlobalContext } from '../context';


const Cell = ({ title, index}) => {

    const [state, dispatch] = useGlobalContext();

    const onChange = (text, index) => {
        const re = /^[1-9\b]+$/;
       
        if (!re.test(text)) {

            dispatch({ type: 'SET_ERROR', payload: {
                index, 
                boolValue: true
            }})
        }
        else  {
            const updatePuzzle = state.data.puzzle.map((current, i) => i == index ? parseInt(text) : current);
            const updatedData = { ...state.data, puzzle: updatePuzzle };

            dispatch({
                type: 'INIT_STATE',
                payload: {
                    data: updatedData,
                    errors: { ...state.errors, [index]: false }
                }
            })

        }
  }

  return (
    <View>
      <TextInput
        style={
          state.data.blocked.includes(index)
            ? { ...styles.cell, backgroundColor: "black" }
            : state.errors[index]
            ? { ...styles.cell, borderColor: "red" }
            : { ...styles.cell }
        }
        defaultValue={
          state.data.blocked.includes(index) || state.data.toFill.includes(index) ? "" : `${title}`
        }
        maxLength={state.data.toFill.includes(index) ? 1 : 2}
        keyboardType="numeric"
        disabled={state.data.blocked.includes(index) || !state.data.toFill.includes(index)}
        value={state.data.puzzle[index]}
        onChangeText={(e) => onChange(e, index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cell: {
    width: 70,
    height: 70,
    fontSize: 30,
    textAlign: "center",
    borderColor: "black",
    borderWidth: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    marginRight: 4,
    marginTop: 5,
  },
});

export default Cell;
