import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Textinput } from '@/src/ui/textinput';
import { login } from '../../services/AuthController';
import { useNavigation } from '@react-navigation/native';
import { useMainStore } from '@/src/store/main.store';

// import { jwtDecode } from 'jwt-decode';
import s from './styles';

import { afterLoginSetup } from '@/src/util/afterLoginSetup';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const navigation = useNavigation();

    // useEffect(() => {
    //     tryGetCredentials();
    // }, []);

    // const tryGetCredentials = () => {
    //     try {
    //         const jsonUser = storage.getString('user');

    //         if (jsonUser) {
    //             const { setUser } = useStore.getState();
    //             setUser(jsonUser);
    //         }
    //         // SecureStore.getItemAsync('s-username').then(async username => {
    //         //     if (username) {
    //         //         const password = await SecureStore.getItemAsync('s-password');
    //         //         if (password) {
    //         //             setUsername(username);
    //         //             setPassword(password);
    //         //         }
    //         //     }
    //         // });
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };

    const onLogin = async () => {
        // console.log();
        try {
            setError(false);
            // if (!expoPushToken) {
            //     Toast.show({
            //         type: 'error',
            //         text1: 'EXPO',
            //         text2: 'NO EXPO PUSH',
            //     });
            //     return;
            // }

            setLoading(true);

            // const res = await login(username, password, expoPushToken);
            const res = await login({
                username: username || 'admin1',
                password: password || 'admin123!',
            });
            // console.log('res login ', res);
            if (!res?.error) {
                const { token } = res?.data || res || {};
                if (token) {
                    // const user = jwtDecode(token);
                    const user = {};
                    console.log('user.id', user.id);

                    const { setUser, setToken } = useMainStore.getState();
                    // const { socket } = useSocketStore.getState();

                    console.log('eimai o ', user.id);

                    setToken(token);
                    setUser(user);
                    // afterLoginSetup({ user, token });

                    // navigation.replace('/questions');
                    // loginSuccess(res);
                }
            } else {
                setError(res?.error);
            }
            setLoading(false);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <View style={{ flex: 1, marginHorizontal: 30, justifyContent: 'center' }}>
            <Textinput
                label="Username"
                onChangeText={text => setUsername(text)}
                value={username}
                style={[s.input, { marginBottom: 30 }]}
            />

            <Textinput
                label="Password"
                onChangeText={text => setPassword(text)}
                value={password}
                style={[s.input, { marginBottom: 30 }]}
                secureTextEntry
            />

            <View style={{ height: 100 }}>
                {loading ? (
                    <Text>Logging in...</Text>
                ) : (
                    <Pressable style={s.button} onPress={onLogin}>
                        <Text style={s.buttonText}>Είσοδος</Text>
                    </Pressable>
                )}
            </View>
            {error && (
                <View>
                    <Text>{error?.code}</Text>
                </View>
            )}
        </View>
    );
};
