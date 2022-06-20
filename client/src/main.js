import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Badge, Button, TextInput } from 'react-native-paper';

const Main = ()  => {
    return (
        <ScrollView horizontal={false} style={styles.container} >

            <View style={styles.badgeContainer}>
                <Badge style={styles.badge}>3:45</Badge>
            </View>

            <View style={styles.gameBoard}>

                <View style={styles.row}>
                    <TextInput style={styles.cell} maxLength={2} keyboardType="numeric"/>
                    <TextInput style={styles.cell} maxLength={2} keyboardType="numeric" defaultValue='11'/>
                    <TextInput style={styles.cell} maxLength={2} keyboardType="numeric" defaultValue='9'/>
                    <TextInput style={styles.cell} maxLength={2} keyboardType="numeric"/>
                    <TextInput style={styles.cell} maxLength={2} keyboardType="numeric"/>
                </View>
                <View style={styles.row}>
                    <TextInput style={styles.cell} maxLength={2} keyboardType="numeric" defaultValue='4'/>
                    <TextInput style={styles.cell} maxLength={2} keyboardType="numeric"/>
                    <TextInput style={styles.cell} maxLength={2} keyboardType="numeric"/>
                    <TextInput style={styles.cell} maxLength={2} keyboardType="numeric" defaultValue='17'/>
                    <TextInput style={styles.cell} maxLength={2} keyboardType="numeric"/>
                </View>
                <View style={styles.row}>
                    <TextInput style={styles.cell} maxLength={2} keyboardType="numeric" defaultValue='11'/>
                    <TextInput style={styles.cell} maxLength={2} keyboardType="numeric"/>
                    <TextInput style={styles.cell} maxLength={2} keyboardType="numeric"/>
                    <TextInput style={styles.cell} maxLength={2} keyboardType="numeric"/>
                    <TextInput style={styles.cell} maxLength={2} keyboardType="numeric" defaultValue='9'/>
                </View>
                <View style={styles.row}>
                    <TextInput style={styles.cell} maxLength={2} keyboardType="numeric"/>
                    <TextInput style={styles.cell} maxLength={2} keyboardType="numeric" defaultValue='23'/>
                    <TextInput style={styles.cell} maxLength={2} keyboardType="numeric" />
                    <TextInput style={styles.cell} maxLength={2} keyboardType="numeric"/>
                    <TextInput style={styles.cell} maxLength={2} keyboardType="numeric"/>
                </View>
                <View style={styles.row}>
                    <TextInput style={styles.cell} maxLength={2} keyboardType="numeric"/>
                    <TextInput style={styles.cell} maxLength={2} keyboardType="numeric"/>
                    <TextInput style={styles.cell} maxLength={2} keyboardType="numeric" defaultValue='8'/>
                    <TextInput style={styles.cell} maxLength={2} keyboardType="numeric"/>
                    <TextInput style={styles.cell} maxLength={2} keyboardType="numeric"/>
                </View>

            </View>


            <View style={styles.submitWrapper} >
                <Button mode='contained' style={styles.buttonStyle}>Submit Solution</Button>
            </View>
        
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        paddingRight: 10,

    },
    badgeContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    gameBoard: {
        marginBottom: 20,
        marginTop: 30,
        height: 450,
        borderColor: 'black',
        borderWidth: 2,
        marginLeft: 5,
        marginRight: 5,
        paddingRight: 2,
        paddingLeft: 30,
        paddingTop: 50

    },
    badge: {
        width: 100,
        height: 30,
        fontSize: 16,
        fontWeight: '700'
    },
    submitWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        
        marginTop: 40
    },
    buttonStyle: {
        width: 300,

    },

    row: {
        flexDirection: 'row',
        
    },
    cell: {
        width: 60,
        height: 60,
        fontSize: 30,
        textAlign: 'center',
        border: 'black',
        borderWidth: 1,
        marginRight: 3,
        marginTop: 5
    }
})

export default Main;