import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
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

    input: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        margin: 10,
    },

    filter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    list: {
        marginTop: 10,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: '#000',
        shadowOpacity: 1,
        elevation: 10,
        marginLeft: 10,
        padding: 5,
        borderRadius: 8,
        backgroundColor: '#fff',
        width: 106,
        height: 106,
        flex: 1, 
        alignItems: 'center', 
        justifyContent:'center'
    },

    image: {
        width: 67,
        height: 86,
        alignItems: 'center',
        justifyContent:'center',
        
        
    },
    text: {
        color: '#000',
        fontSize: 15,
        fontWeight: "bold",
    },
});