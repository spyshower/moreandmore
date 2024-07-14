// import { OneSignal } from 'react-native-onesignal';
import { useMainStore } from '@/src/store/main.store';

export const logout = () => {
    try {
        // OneSignal.logout();
        useMainStore.getState().resetAll();
    } catch (err) {
        console.log('logout err: ', err);
    }
};
