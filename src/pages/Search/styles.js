import { StyleSheet } from 'react-native';

import { colors } from '~/styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: colors.GayLight,
    },

    logo: {
        width: 180,
        height: 180,
        borderRadius: 100
    },

    input: {
        borderRadius: 300,
        marginTop: 20,
        marginLeft: 50,
        marginRight: 50,
        width: 300,
        height: 40,
        alignItems: 'center',
        backgroundColor: '#F0F8FF',
        fontSize: 15,
        fontWeight: 'bold',
        borderRadius: 3,
        padding: 10,
    },

    button: {
        width: 300,
        height: 42,
        backgroundColor: colors.success,
        marginTop: 10,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },

    lista: {
        fontSize: 20,
        color: colors.black,
        padding: 25,
        borderBottomColor: 1,
        borderBottomColor: colors.success,
    },

    buttonText: {

    },

});

export default styles;