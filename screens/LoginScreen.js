import { View, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";
import LoginCard from "../components/LoginScreen/LoginCard";

function LoginScreen({ navigation }) {

    function logInPressHandler() {
        return navigation.navigate('WelcomeScreen')
    }

    return (
        <View style={styles.container} >
            <LoginCard
                loginFunc={logInPressHandler}
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