import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import { GlobalStyles } from "../constants/styles";
import WelcomeScreen from "../screens/WelcomeScreen";

function StackNavigator() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={{
            headerTintColor: GlobalStyles.colors.accent500,
            headerStyle: { backgroundColor: GlobalStyles.colors.primary800 },
            headerTitleAlign: 'center'
        }} >
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{
                title: 'Login'
            }} />
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{
                title: 'Welcome'
            }} />
        </Stack.Navigator>
    );
}


export default StackNavigator;