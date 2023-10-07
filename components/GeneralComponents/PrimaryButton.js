import { Text, View, Pressable, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function PrimaryButton({ buttonName, onPressFunc }) {
    return (
        <Pressable style={({ pressed }) => [styles.container, pressed ? styles.pressed : null]} onPress={onPressFunc} >
            <Text style={styles.text} >{buttonName}</Text>
        </Pressable>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    container: {
        height: 26,
        backgroundColor: GlobalStyles.colors.primary500,
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: 'bold',
        color: GlobalStyles.colors.accent500
    },
    pressed: {
        opacity: 0.5
    }
});