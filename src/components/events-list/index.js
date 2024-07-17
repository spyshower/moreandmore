import React, { useEffect } from 'react';
import { Text, Pressable, ScrollView } from 'react-native';
import { useEventsStore } from '@/src/store/events.store';
import { edit, getAll } from '@/src/api/events/index';
import { EventCard } from '../event-card/index';
import { useNavigation } from '@react-navigation/native';
import s from './styles';

export const EventsList = () => {
    const [setSelectedEvent, likedEvents, setLikedEvents, events, setEvents] =
        useEventsStore(s => [
            s.setSelectedEvent,
            s.likedEvents,
            s.setLikedEvents,
            s.events,
            s.setEvents,
        ]);
    const navigation = useNavigation();

    useEffect(() => {
        init();
    }, []);

    const init = async () => {
        try {
            // console.log(usersCollection);
            // const test = await getOne('L2nF61XX0oKU7FdPLPl5');
            const events = await getAll();
            // console.logobject(events);
            setEvents(
                events.map(ev => ({
                    ...ev,
                    date: ev.date?.seconds ? new Date(ev.date.seconds * 1000) : ev.date,
                })),
            );
        } catch (err) {
            console.log(err);
        }
    };

    const onNewEventPress = () => {
        setSelectedEvent(null);
        navigation.push('event');
    };
    const onEventPress = eventId => {
        console.log(eventId);
        const event = events.find(ev => ev.id === eventId);
        if (!event) {
            console.log('oh no');
            return;
        }
        setSelectedEvent(event);

        navigation.push('event');
    };

    const onLike = async eventId => {
        const eventIndex = events.findIndex(ev => ev.id === eventId);
        if (eventIndex === -1) {
            console.log('oh no');
            return;
        }
        const likedEventIndex = likedEvents.findIndex(ev => ev === eventId);
        const newLikedEvents = [...likedEvents];
        const newEvents = [...events];
        console.log(likedEventIndex);
        if (likedEventIndex === -1) {
            newLikedEvents.push(eventId);
            newEvents[eventIndex].likes++;
        } else {
            newLikedEvents.splice(likedEventIndex, 1);
            newEvents[eventIndex].likes--;
        }
        setLikedEvents(newLikedEvents);

        const res = await edit(eventId, { likes: newEvents[eventIndex].likes });

        setEvents(newEvents);
    };

    return (
        <ScrollView contentContainerStyle={s.container}>
            <Pressable onPress={onNewEventPress} style={s.new_event_button}>
                <Text style={s.new_event_text}>Create new Event</Text>
            </Pressable>
            {events?.length > 0 &&
                events.map(event => (
                    <EventCard
                        key={event.id}
                        event={event}
                        onEventPress={onEventPress}
                        onLike={onLike}
                        liked={likedEvents.find(ev => ev === event.id)}
                    />
                ))}
        </ScrollView>
    );
};
