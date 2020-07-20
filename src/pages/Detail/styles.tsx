import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    product: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
        marginTop: 48,
    },

    image: {
        width: 100,
        height: 100,

    },

    productName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#41414d',
        marginBottom: 10,
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

    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
    },

    heroTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30,
    },

    heroDescription: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16,
    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    detailsButtonBlue: {
        backgroundColor: '#01609D',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    detailsButtonRed: {
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    actionText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },

    centeredModal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },

    modal: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        }
    },

    viewInput: {
        flex: 1,
        flexDirection: 'row',
        padding: 5
    },

    input: {
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#aeaeae',
        height: 40,
        borderRadius: 5,
        padding: 10,
        marginLeft: 10

    },
});

export default styles;