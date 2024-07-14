import Toast from 'react-native-simple-toast';

export const toastSuccess = text => {
    Toast.show(text);
};
export const toastError = obj => {
    let text;
    if (obj?.message) {
        text = obj.message;
    } else if (typeof obj === 'string') {
        text = obj;
    } else {
        text = `Κάποιο πρόβλημα προέκυψε${typeof obj.error === 'string' || obj?.code ? ':' : ''}${
            typeof obj.error === 'string' ? ` ${obj.error}` : ''
        }${obj?.code ? ` (${obj.code})` : ''}`;
    }
    Toast.show(text);
};
