import { useEffect } from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './home';
import { Login } from './login';
// import { afterLoginSetup } from '../util/afterLoginSetup';
// import { AllModals } from '@/src/components/modal/all-modals';
import { useMainStore } from '@/src/store/main.store';
import { colors } from '../util/colors';
// import { logout } from '../config/logout';

const Stack = createNativeStackNavigator();

export default () => {
    const [user, token] = useMainStore(s => [s.user, s.token]);

    useEffect(() => {
        console.log('routes.js user -----> ', user?.id);

        if (!user) {
            // logout();
            return;
        }
        // afterLoginSetup({ user, token });
    }, [user]);

    return (
        <NavigationContainer theme={{ colors: { background: colors['secondary'] } }}>
            {/* <AllModals /> */}
            <View
                style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    backgroundColor: colors['primary'],
                }}
            />

            <Stack.Navigator
                // screenOptions={{
                //     headerShown: false,
                // }}
                transitionerStyle={{ backgroundColor: 'red' }}
            >
                {user ? (
                    <>
                        <Stack.Screen name="home" component={Home} />
                    </>
                ) : (
                    <Stack.Screen name="login" component={Login} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};
