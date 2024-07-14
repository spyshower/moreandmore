import { Pressable, Text } from 'react-native';

export const CustomPressable = props => {
    return (
        <Pressable
            onPress={props.onPress}
            style={({ pressed }) => [props.style, pressed && props.stylePressed]}
        >
            {({ pressed }) => {
                return (
                    <Text style={[props.textStyle, pressed && props.textStylePressed]}>
                        {props.label}
                    </Text>
                );
            }}
        </Pressable>
    );
};
