import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './home';
import { Login } from './login';
import { Registration } from './registration';
import { useMainStore } from '@/src/store/main.store';
import { colors } from '../util/colors';
import { Event } from './event/index';

const Stack = createNativeStackNavigator();

export default () => {
    const [user, token] = useMainStore(s => [s.user, s.token]);

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

            <Stack.Navigator>
                {user ? (
                    <>
                        <Stack.Screen name="home" component={Home} />
                        <Stack.Screen name="event" component={Event} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="login" component={Login} />
                        <Stack.Screen name="registration" component={Registration} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};
