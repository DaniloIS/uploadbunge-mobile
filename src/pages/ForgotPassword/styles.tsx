import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#01609D',
    },

    header: {
        padding: 24,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    headerTitle: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
        width: '90%'
    },

    body: {
        paddingHorizontal: 24,
        height: '100%',
        justifyContent: 'center',
        paddingBottom: '20%',
    },

    input: {
        backgroundColor: '#3983B2',
        borderWidth: 0.5,
        borderColor: '#3983B2',
        height: 40,
        borderRadius: 5,
        marginTop: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },

    button: {
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 40,
        borderRadius: 5,
        marginTop: 10,
    },

    buttonText: {
        color: '#01609D',
        padding: 10,
        fontSize: 15,
        fontWeight: 'bold',
    }
});

export default styles;