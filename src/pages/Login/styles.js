import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.secundary,
    },

    logo: {
        width: 180,
        height: 180,
        borderRadius: 100
    },

    input: {
        marginTop: 20,
        width: 300,
        backgroundColor: colors.White,
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

    buttonText: {

    },

});

export default styles;