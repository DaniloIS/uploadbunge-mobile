import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#01609D',
    },

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

    body: {
        paddingHorizontal: 24,
        height: '100%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        justifyContent: 'center',
        paddingBottom: '20%',
    },

    circle: {
        width: 80,
        height: 80,
        borderRadius: 80/2,
        backgroundColor: '#aeaeae',
        alignItems: 'center',
        justifyContent:'center',
    },

    input: {
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#aeaeae',
        height: 40,
        borderRadius: 5,
        marginTop: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    
    inputSelect: {
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#aeaeae',
        borderRadius: 5,
        marginTop: 10
    },

    select: {
        height: 40,
    },

    button: {
        alignItems: 'center',
        backgroundColor: '#01609D',
        height: 40,
        borderRadius: 5,
        marginTop: 10,
    },

    buttonText: {
        color: '#fff',
        padding: 10,
        fontSize: 15,
        fontWeight: 'bold',
    }
});

export default styles;