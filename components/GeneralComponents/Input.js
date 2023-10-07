import { StyleSheet, TextInput } from "react-native";

function Input() {
    return (
        <TextInput style={styles.inputContainer} />
    );
}


export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        height: 36,
        backgroundColor: 'white',
        marginHorizontal: 16,
        marginVertical: 12,
        borderRadius: 4,
    }
});