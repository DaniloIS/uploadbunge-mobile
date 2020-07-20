import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },

    header: {
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        height: 100,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: '#000',
        shadowOpacity: 1,
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center'
        
        
    },

    headerText: {
        fontSize: 15,
        color: '#737380',
    },

    headerTextBold: {
        fontWeight: 'bold',
    },

    input: {
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: '85%',
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },

    itemProductList: {
        marginTop: 32,
        paddingHorizontal: 10,
    },

    itemProduct: {
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
        height: 100
    },

    itemProductItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    itemProductName: {
        fontSize: 16,
        color: '#41414d',
        fontWeight: 'bold',
        marginBottom: 10
    },

    itemProductProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    itemProductValue: {
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
});

export default styles;