import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        alignItems: 'stretch',
        rowGap: 24,
        paddingVertical: 8,
        paddingHorizontal: 24,
    },
    new_event_button: {
        paddingVertical: 10,
    },
    new_event_text: {
        fontSize: 30,
        color: '$secondary',
        fontFamily: 'semi-bold',
    },
});
