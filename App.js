import React, { useEffect } from 'react';
// import {
//     View,
//     Text,
//     StatusBar,
//     StyleSheet,
//     useColorScheme,
//     Pressable,
// } from 'react-native';
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
    return (
        <SafeAreaProvider>
            <Navigation />
        </SafeAreaProvider>
    );
};

export default App;
