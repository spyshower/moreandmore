import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Textinput } from '@/src/ui/textinput';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import s from './styles';

export const Registration = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const navigation = useNavigation();

    const goToLogin = () => navigation.replace('login');

    const onRegister = () => {
        auth()
            .createUserWithEmailAndPassword(username, password)
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error?.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error?.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
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
                    <Text>...</Text>
                ) : (
                    <Pressable style={s.button} onPress={onRegister}>
                        <Text style={s.buttonText}>Register</Text>
                    </Pressable>
                )}
            </View>
            {error && (
                <View>
                    <Text>{error?.code}</Text>
                </View>
            )}
            <Pressable onPress={goToLogin}>
                <Text>I have an account</Text>
            </Pressable>
        </View>
    );
};
