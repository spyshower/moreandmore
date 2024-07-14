import { useNavigation } from '@react-navigation/native';
import { Back } from '@/src/ui/svgs';
import { Pressable } from 'react-native';
import s from './styles';

export const BackButton = () => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };

    return (
        <Pressable style={s.container} onPress={goBack} hitSlop={10}>
            <Back size={30} />
        </Pressable>
    );
};
