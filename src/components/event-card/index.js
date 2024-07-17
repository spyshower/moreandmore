import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Heart } from '@/src/ui/svgs';
import s from './styles';

export const EventCard = ({ event, onEventPress, onLike, liked }) => {
    const { id, title, description, date, likes } = event || {};
    return (
        <Pressable style={s.container} onPress={() => onEventPress(id)}>
            <View style={s.title_row}>
                <Text style={s.title}>{title}</Text>
                <Pressable onPress={() => onLike(id)} hitSlop={16}>
                    <Heart color="red" filled={liked} />
                </Pressable>
            </View>
            <Text style={s.date}>{date && new Date(date).toLocaleString()}</Text>
            <Text style={s.description}>{description}</Text>
            <Text style={s.description}>{likes}</Text>
        </Pressable>
    );
};
