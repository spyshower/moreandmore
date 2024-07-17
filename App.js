import React, { useState, useEffect } from 'react';
// import {
//     View,
//     Text,
//     StatusBar,
//     StyleSheet,
//     useColorScheme,
//     Pressable,
// } from 'react-native';
import auth from '@react-native-firebase/auth';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { LogLevel, OneSignal } from 'react-native-onesignal';
import EStyleSheet from 'react-native-extended-stylesheet';
import firebase from '@react-native-firebase/app';
import Navigation from './src/screens/routes';
// import { handleNotification } from './src/util/onesignal-handlers';
import { colors } from '@/src/util/colors';
import { useMainStore } from './src/store/main.store';

if (__DEV__) {
    console.logobject = obj => {
        console.log(JSON.stringify(obj, null, 3));
    };
} else {
    console.log = () => undefined;
}

EStyleSheet.build({
    $primary: colors['primary'],
    $secondary: colors['secondary'],
});

const App = () => {
    const [initializing, setInitializing] = useState(true);
    const [setUser] = useMainStore(s => [s.setUser]);

    // Handle user state changes
    const onAuthStateChanged = user => {
        setUser(user);
        // if (initializing) setInitializing(false);
    };

    useEffect(() => {
        // firebase
        //     .initializeApp({
        //         apiKey: 'AIzaSyCOaZTOVC-169dZuGOKxkK5WE_7oOUC1_8',
        //         authDomain: 'more-841c4.firebaseapp.com',
        //         projectId: 'more-841c4',
        //         databaseURL:
        //             'https://more-841c4-default-rtdb.europe-west1.firebasedatabase.app/',
        //         appId: '1:361391031789:android:6b4967191ec4a3457213e4',
        //         messagingSenderId: '361391031789',
        //         storageBucket: 'more-841c4.appspot.com',
        //     })
        //     .then(res => console.log('fb res', res))
        //     .catch(e => console.log('fb err', e));
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    return (
        <SafeAreaProvider>
            <Navigation />
        </SafeAreaProvider>
    );
};

export default App;
