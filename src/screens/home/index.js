import React from 'react';
import Animated, { FadeIn } from 'react-native-reanimated';
import { EventsList } from '@/src/components/events-list/index';
import s from './styles';

export const Home = () => {
    return (
        <Animated.View entering={FadeIn.delay(500)} style={s.container}>
            <EventsList />
        </Animated.View>
    );
};
