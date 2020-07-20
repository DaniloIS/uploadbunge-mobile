import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
        flex: 1,
        
    },

    input: {
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },

    productList: {
        marginTop: 32,
        paddingHorizontal: 10,
    },

    product: {
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },

    circle: {
        width: 100,
        height: 100,
        borderRadius: 100/2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'center',
        shadowOffset: { width: 10, height: 10 },
        shadowColor: '#000',
        shadowOpacity: 1,
        elevation: 10,
    },

    circleImage: {
        width: 100,
        height: 100,
    },

    productItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    notificationTitle: {
        fontSize: 16,
        color: '#41414d',
        fontWeight: 'bold',
        padding: 10
    },

    notificationDescription: {
        fontSize: 16,
        color: '#41414d',
        paddingLeft: 10
    },

    productProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    productValue: {
        fontSize: 15,
        color: '#737380',
        paddingLeft:5,
        paddingRight:5
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    detailsButtonText: {
        color: '#01609D',
        fontSize: 15,
        fontWeight: 'bold'
    },
});