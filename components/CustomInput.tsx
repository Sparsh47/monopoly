import { TextInput, View, StyleSheet } from 'react-native';

export default function CustomInput({
                                        value,
                                        onChangeText,
                                        placeholder,
                                    }: {
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
}) {
    return (
        <View style={styles.inputWrapper}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor="#d0d7e2"
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inputWrapper: {
        width: '100%',
        marginVertical: 10,
        paddingHorizontal: 5,
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        color: '#ffffff',
        padding: 16,
        fontSize: 16,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 12,
    },
});
