import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    header: {
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        height: 100,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: '#000',
        shadowOpacity: 1,
        elevation: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },

    headerUser: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#737380',
    },

    headerText: {
        fontSize: 14,
        color: '#737380',
    },

    circle: {
        width: 80,
        height: 80,
        borderRadius: 80/2,
        backgroundColor: '#aeaeae',
        alignItems: 'center',
        justifyContent:'center',
    },

    container: {
        justifyContent: 'center',
        paddingHorizontal: 10,
    },

    buttonConfig: {
        height: 40,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    config: {
        color: '#707070',
        marginLeft: 5,
    }
});