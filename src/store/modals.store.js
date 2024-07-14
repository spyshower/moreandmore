import { create } from 'zustand';

const initStateData = {
    modalBattleRequest: null,
};

export const useModalStore = create((set, get) => ({
    ...initStateData,

    setModalBattleRequest: data =>
        set(() => {
            return {
                modalBattleRequest: data,
            };
        }),

    closeAllModals: () =>
        set(() => {
            const newState = {};
            Object.keys(initStateData).forEach(key => {
                newState[key] = initStateData[key];
            });

            return {
                ...newState,
            };
        }),
}));
