import React, { useEffect, useRef } from 'react';
import { View, Text, Pressable, useWindowDimensions } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CSS_VARS } from '@/src/util/colors';
import { useMainStore } from '@/src/store/main.store';
import s from './styles';

export const Home = () => {
    const [user, token] = useMainStore(s => [s.user, s.token]);
    const fetchedInitBattleStateRef = useRef(false);

    const navigation = useNavigation();

    const { top, right, bottom, left } = useSafeAreaInsets();

    const { width: screenWidth } = useWindowDimensions();

    useEffect(() => {
        if (user?.id && token && !fetchedInitBattleStateRef.current) {
            fetchedInitBattleStateRef.current = true;
            // checkForBattles();
        }
    }, [user, token]);

    // const checkForBattles = async () => {
    //     try {
    //         const d1 = new Date();
    //         const res = await getActiveBattles();
    //         const d2 = new Date();
    //         console.log(d2 - d1);
    //         console.log('check ba');
    //         console.logobject(res?.data);
    //         if (res?.data) {
    //             console.log(getCorrectTime(res?.data?.currentTime));
    //         }
    //     } catch (err) {
    //         console.log('getActiveBattles err: ', err);
    //     }
    // };

    return (
        <Animated.View
            entering={FadeIn.delay(500)}
            // exiting={FadeOutUp}
            style={s.container}
        >
            <Text>i am {user?.username}</Text>
        </Animated.View>
    );
};
