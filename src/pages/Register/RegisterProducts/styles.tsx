import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#01609D',
        padding: 24,
        alignItems: 'center',
        
    },

    headerTitle: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
    },

    container: {
        paddingHorizontal: 24,
    },

    input: {
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#aeaeae',
        height: 40,
        borderRadius: 5,
        marginTop: 10,
        padding: 10,

    },

    imageSelect: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },

    image: { 
        width: 50,
        height: 50,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#aeaeae',
        marginRight: 10
    },

    select: {
        height: 40,
    },


    button: {
        alignItems: 'center',
    },

    buttonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        backgroundColor: '#01609D',
        padding: 10,
        height: 40,
        borderRadius: 5,
        marginTop: 10,
    },
});

export default styles;