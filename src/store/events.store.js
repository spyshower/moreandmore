import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();
const MMKVzustandStorage = {
    setItem: (name, value) => {
        return storage.set(name, value);
    },
    getItem: name => {
        const value = storage.getString(name);
        return value ?? null;
    },
    removeItem: name => {
        return storage.delete(name);
    },
};

const excludedKeys = [
    // 'user'
];

const initStateData = {
    events: [],
    selectedEvent: null,
    likedEvents: [],
};

export const useEventsStore = create(
    persist(
        set => ({
            ...initStateData,

            setEvents: data =>
                set(() => {
                    return {
                        events: data,
                    };
                }),

            setSelectedEvent: data =>
                set(() => {
                    return {
                        selectedEvent: data,
                    };
                }),

            setLikedEvents: data =>
                set(() => {
                    return {
                        likedEvents: data,
                    };
                }),

            resetAll: () => {
                set(() => {
                    const newState = {};
                    Object.keys(initStateData).forEach(key => {
                        newState[key] = initStateData[key];
                    });

                    return {
                        ...newState,
                    };
                });
            },
        }),
        {
            name: 'events-store',
            storage: createJSONStorage(() => MMKVzustandStorage),
            partialize: state =>
                Object.fromEntries(
                    Object.entries(state).filter(([key]) => !excludedKeys.includes(key)),
                ),
        },
    ),
);
