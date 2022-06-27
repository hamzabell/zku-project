import { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Badge  } from 'react-native-paper'
import { useGlobalContext } from '../context';


const Timer = () => {
    const [state, dispatch] = useGlobalContext();
    const [seconds, setSeconds] = useState(60);

    useEffect(() => {   
      let t;
      const startTimer = () => {
        t = setTimeout(() => {
            if(seconds == 0) dispatch({ type: 'END_GAME' });
            setSeconds(state => state == 0 ? 0: state -1);
        }, 6000)
      }
      dispatch({ type: 'SET_RESET_TIMER', payload: () => {
        dispatch({ type: 'RESTART_GAME' });
        setSeconds(60);
        clearTimeout(t);
        startTimer();
      }})

      startTimer();

      return () => {
        clearTimeout(t);
      }

    }, [seconds])

   

    return (
         <View style={styles.badgeContainer}>
            <Badge style={styles.badge}>
                {seconds}
            </Badge>
         </View>
    )
}

const styles = StyleSheet.create({
     badgeContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    badge: {
        width: 200,
        height: 50,    
        paddingTop: 4,
        borderRadius: 25,
        paddingTop: 19,  
        fontSize: 16,
        fontWeight: '700',
        fontSize: 23,
        color: 'white'
    },
    timerText: {
        
    }
})

export default Timer;