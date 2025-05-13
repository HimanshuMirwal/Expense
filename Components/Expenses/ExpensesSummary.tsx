import { GlobalStyles } from "@/constants/styles";
import { StyleSheet, Text, View } from "react-native";

function ExpensesSummary({
  periodName,
  expenses,
}: {
  expenses: any;
  periodName: any;
}) {
  const expenseSum = expenses.reduce((sum: any, expense: any) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expenseSum.toFixed(2)}</Text>
    </View>
  );
}
export default ExpensesSummary;


const styles = StyleSheet.create({
    container : {
        padding:16,
        backgroundColor:GlobalStyles.Colors.primary50,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:"center"
    },
    period:{
        fontSize:12,
        color:GlobalStyles.Colors.primary400
    },
    sum:{
        fontSize:16,
        fontWeight:700,
        color:GlobalStyles.Colors.primary500
    }

})