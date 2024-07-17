import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'space-between',
        alignItems: 'stretch',
        // rowGap: 20,
        paddingBottom: 16,
        backgroundColor: '$primary',
    },
    menu_items: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
});
