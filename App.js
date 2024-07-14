import React, { useEffect } from 'react';
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

import Navigation from './src/screens/routes';
// import { handleNotification } from './src/util/onesignal-handlers';
import { colors } from '@/src/util/colors';

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
    const [user, setUser] = useState();

    // Handle user state changes
    const onAuthStateChanged = user => {
        setUser(user);
        if (initializing) setInitializing(false);
    };

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    return (
        <SafeAreaProvider>
            <Navigation />
        </SafeAreaProvider>
    );
};

export default App;
