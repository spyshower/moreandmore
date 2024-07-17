import firestore from '@react-native-firebase/firestore';

export const getAll = async () => {
    try {
        const querySnapshot = await firestore()
            .collection('events')
            .orderBy('likes', 'desc')
            .get();
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (err) {
        console.log('event getOne err: ', err);
    }
};

export const add = async data => {
    try {
        const doc = await firestore().collection('events').add(data);
        return doc;
    } catch (err) {
        console.log('event getOne err: ', err);
    }
};

export const edit = async (id, data) => {
    try {
        const doc = await firestore().collection('events').doc(id).update(data);
        console.log(doc);
        return !doc;
    } catch (err) {
        console.log('event edit err: ', err);
    }
};

export const deleteDoc = async id => {
    try {
        const doc = await firestore().collection('events').doc(id).delete();
        return doc;
    } catch (err) {
        console.log('event delete err: ', err);
    }
};
