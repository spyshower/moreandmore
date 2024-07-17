import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '$secondary',
    },
    title_row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 34,
        fontFamily: 'semi-bold',
        color: '$secondary',
    },

    description: {
        fontSize: 28,
        fontFamily: 'medium',
        color: '$secondary',
    },
    date: {
        fontSize: 20,
        fontFamily: 'medium',
        color: '$secondary',
        marginBottom: 10,
    },
});
