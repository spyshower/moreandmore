import React, { useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeIn } from 'react-native-reanimated';
import DateTimePicker from '@react-native-community/datetimepicker';
import { add, deleteDoc, edit } from '@/src/api/events/index';
import { useEventsStore } from '@/src/store/events.store';
import { Textinput } from '@/src/ui/textinput/index';
import s from './styles';

export const Event = () => {
    const [selectedEvent] = useEventsStore(s => [s.selectedEvent]);
    const [title, setTitle] = useState(selectedEvent?.title || '');
    const [description, setDescription] = useState(selectedEvent?.description || '');

    const [date, setDate] = useState(
        selectedEvent?.date ? new Date(selectedEvent.date) : new Date(),
        // selectedEvent?.date || new Date(),
    );
    const [tempDate, setTempDate] = useState('');
    const [mode, setMode] = useState('date');
    const [showDatepicker, setShowDatepicker] = useState(false);
    const editMode = !!selectedEvent;

    const navigation = useNavigation();

    const onAdd = async () => {
        try {
            const newEvent = {
                title,
                description,
                date: date.getTime(),
                likes: 0,
            };
            const res = await add(newEvent);

            if (res) {
                navigation.replace('home');
            }
        } catch (err) {
            console.log('add err: ', err);
        }
    };

    const onEdit = async () => {
        try {
            const editedEvent = {
                // id: generateUUID(5),
                title,
                description,
                date: date.getTime(),
                likes: selectedEvent.likes,
            };
            console.log(editedEvent);
            // return;
            const res = await edit(selectedEvent.id, editedEvent);

            console.log(res);
            if (res) {
                navigation.replace('home');
            }
        } catch (err) {
            console.log('edit err: ', err);
        }
    };

    const onDelete = async () => {
        try {
            await deleteDoc(selectedEvent.id);
            navigation.replace('home');
        } catch (err) {
            console.log('delete err: ', err);
        }
    };
    // console.log(date);
    // console.log(new Date(date?.seconds * 1000));

    // const onDateChange = ({ type, selectedDate }) => {
    const onDateChange = (event, selectedDate) => {
        console.log(event.type, mode, selectedDate);
        // nativeEvent: { timestamp }
        if (event?.type === 'dismissed' && mode === 'time') {
            return;
        }
        const currentDate = selectedDate;
        if (mode === 'date') {
            setTempDate(selectedDate);
            setMode('time'); // Switch to time picker after selecting date
            setShowDatepicker(Platform.OS !== 'ios'); // Show the time picker immediately on non-iOS platforms
        } else {
            const finalDate = new Date(
                tempDate.getFullYear(),
                tempDate.getMonth(),
                tempDate.getDate(),
                currentDate.getHours(),
                currentDate.getMinutes(),
            );
            console.log('final', finalDate);

            // const formattedDate = currentDate.toLocaleString(); // Format the selected date and time
            setDate(finalDate); // Save the selected date and time
            setShowDatepicker(false);
        }
    };

    useEffect(() => {
        if (!showDatepicker) {
            setMode('date');
        }
    }, [showDatepicker]);

    console.log(selectedEvent?.date);
    return (
        <Animated.View
            entering={FadeIn.delay(500)}
            // exiting={FadeOutUp}
            style={s.container}
        >
            <View style={s.main_container}>
                <Textinput
                    label="Title"
                    onChangeText={text => setTitle(text)}
                    value={title}
                    style={s.textinput}
                />

                <Textinput
                    label="Description"
                    onChangeText={text => setDescription(text)}
                    value={description}
                    style={s.textinput}
                />

                {/* {showDatepicker && (
                <DateTimePicker
                    value={date}
                    is24Hour
                    display="default"
                    onChange={onDateChange}
                    minimumDate={new Date()}
                />
            )} */}

                {showDatepicker && (
                    <DateTimePicker
                        value={date}
                        is24Hour
                        display="default"
                        onChange={onDateChange}
                        minimumDate={new Date()}
                        mode={mode}
                    />
                )}

                <Pressable onPress={() => setShowDatepicker(true)}>
                    <Text style={s.date}>{new Date(date)?.toLocaleString?.()}</Text>
                </Pressable>
            </View>

            <Pressable style={s.save_button} onPress={onDelete}>
                <Text style={s.save_button_text}>Delete</Text>
            </Pressable>

            <Pressable style={s.save_button} onPress={editMode ? onEdit : onAdd}>
                <Text style={s.save_button_text}>Save</Text>
            </Pressable>
        </Animated.View>
    );
};
