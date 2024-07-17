import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        paddingTop: 16,
        paddingHorizontal: 36,
        backgroundColor: '$primary',
    },
    main_container: {
        flex: 1,
        alignItems: 'stretch',
        rowGap: 14,
        backgroundColor: '$primary',
    },
    textinput: { marginBottom: 30 },
    date: {
        fontSize: 30,
        color: '$secondary',
    },
    save_button: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginBottom: 40,

        backgroundColor: 'red',
    },
    save_button_text: {
        fontSize: 35,
        color: '$secondary',
        textAlign: 'center',
    },
});
