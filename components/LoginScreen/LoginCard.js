import { Text, View, StyleSheet } from "react-native";
import Input from "../GeneralComponents/Input";
import { GlobalStyles } from "../../constants/styles";
import PrimaryButton from "../GeneralComponents/PrimaryButton";

function LoginCard({ loginFunc, createUserFunc }) {

    return (
        <View style={styles.mainContainer} >
            <View style={styles.rootContainer} >
                <Text style={styles.text} >Email Address:</Text>
                <Input />
                <Text style={styles.text} >Password:</Text>
                <Input />
                <PrimaryButton buttonName="Log In" onPressFunc={loginFunc} />
                <PrimaryButton buttonName="Create a new user" onPressFunc={createUserFunc} />
            </View>
        </View>
    );
}


export default LoginCard;

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
    },
    rootContainer: {
        backgroundColor: GlobalStyles.colors.primary800,
        height: 290,
        width: 320,
        marginTop: 42,
        borderWidth: 1,
        borderRadius: 4,
        paddingVertical: 24,
    },
    text: {
        color: GlobalStyles.colors.accent500,
        fontWeight: 'bold',
        fontSize: 18,
        marginHorizontal: 16,
    },
});