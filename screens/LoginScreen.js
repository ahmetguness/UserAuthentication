import { View, StyleSheet, Alert } from "react-native";
import { GlobalStyles } from "../constants/styles";
import LoginCard from "../components/LoginScreen/LoginCard";

function LoginScreen({ navigation }) {

    function logInPressHandler() {
        if (true) {
            return navigation.navigate('WelcomeScreen')
        } else {
            return Alert.alert('Check your email or password');
        }
    }

    return (
        <View style={styles.container} >
            <LoginCard
                logInFunc={logInPressHandler}
                createUserFunc={() => console.log('asd')}
            />
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.primary100,
    }
});