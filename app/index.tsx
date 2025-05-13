
import { GlobalStyles } from "@/constants/styles";
import AllExpenses from "@/screens/AllExpenses";
import ManageExpenses from "@/screens/ManageExpenses";
import RecentExpenses from "@/screens/RecentExpenses";
import ExpensesContextProvider from "@/store/ExpenseContext";
import Button from "@/UI/IconButton";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";

const BottomTabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function TabsDrawer(){
  return (
    <BottomTabs.Navigator screenOptions={({navigation})=>({
      headerStyle:{
        backgroundColor:GlobalStyles.Colors.primary500
      },
      headerTintColor:"#ffff",
      tabBarStyle:{
        backgroundColor:GlobalStyles.Colors.primary500
      },
      tabBarActiveTintColor:GlobalStyles.Colors.accent500,
      headerRight:({ tintColor }: { tintColor?: string }) => (
        <Button onpress={() => navigation.navigate("ManageExpenses")} name="add" size={24} color={tintColor} />
      )
    })}>
      <BottomTabs.Screen 
      options={{
        title:"All Expenses",
        tabBarLabel:"All Expenses",
        tabBarIcon:({color, size})=><Ionicons name="list" size={size} color={color} />
      }}
      name="All Expenses" component={AllExpenses} />
      <BottomTabs.Screen 
       options={{
        title:"Recent Expenses",
        tabBarLabel:"Recent",
        tabBarIcon:({color, size})=><Ionicons name="time" size={size} color={color} />
      }}
      name="Recent Expenses" component={RecentExpenses} />
    </BottomTabs.Navigator>
  )
}


export default function Index() {
  return (
    <>
    <StatusBar barStyle={"dark-content"} />
    <ExpensesContextProvider>
    <Stack.Navigator initialRouteName="ExpensesOverView" 
    screenOptions={{
      headerStyle:{
        backgroundColor:GlobalStyles.Colors.primary500,
      },
      headerTintColor:"#fff"

    }}
    >
        <Stack.Screen 
        name="ExpensesOverView" 
        component={TabsDrawer}
        options={{
          headerShown:false
        }}
        />
        <Stack.Screen options={{
          title:"Manage Expense",
          presentation:"modal"
        }} name="ManageExpenses" component={ManageExpenses}/>
    </Stack.Navigator>
    </ExpensesContextProvider>
    </>
  );
}
