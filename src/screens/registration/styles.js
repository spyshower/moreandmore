import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    input: {
        width: 200,
        color: '$primary',
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: 'white',
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'orange',
    },
    buttonText: {
        fontSize: 20,
    },
});
