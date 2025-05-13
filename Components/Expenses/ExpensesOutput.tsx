import { GlobalStyles } from "@/constants/styles";
import { StyleSheet, View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";



function ExpensesOutput({expenses, expensePeriod} : {expenses : any, expensePeriod:any}) {
  return (
    <View style={styles.container}>
     <ExpensesSummary expenses = {expenses} periodName = {expensePeriod} />
      <ExpensesList expenses = {expenses} />
    </View>
  );
}

export default ExpensesOutput;


const styles = StyleSheet.create({
    container : {
        flex:1,
        padding:24,
        backgroundColor:GlobalStyles.Colors.primary700,
        paddingHorizontal: 24,
        paddingTop:24,
        paddingBottom:0,     
    }
})