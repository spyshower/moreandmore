import { TextInput, Text } from 'react-native';
import s from './styles';

export const Textinput = ({
    label,
    value,
    onChangeText,
    styleLabel,
    styleInput = {},
    ...props
}) => {
    return (
        <>
            {label ? <Text style={[s.label, styleLabel]}>{label}</Text> : null}
            <TextInput
                onChangeText={onChangeText}
                value={value}
                style={{ ...s.input, ...styleInput }}
                {...props}
            />
        </>
    );
};
