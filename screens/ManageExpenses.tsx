import ManageExpensesForm from "@/Components/ManageExpenses/ManageExpenseForm";
import { GlobalStyles } from "@/constants/styles";
import { ExpenseContext } from "@/store/ExpenseContext";
import { Ionicons } from "@expo/vector-icons";
import { useContext, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

function ManageExpenses({route, navigation}:{route:any, navigation:any}){
    const expenseIdToEdit = route?.params?.expenseId || "";
    const isEditing = !!expenseIdToEdit;

    const ExpenseCtx = useContext(ExpenseContext);

    useLayoutEffect(() => {
      navigation.setOptions({
        title: isEditing ? "Edit Expense" : "Add Expense",
      });
    }, []);

    const selectedExpense = ExpenseCtx.expenses.find((expense:any)=>expense._id == expenseIdToEdit)

    function deleteExpenseHandler(){
        ExpenseCtx.removeExpense(expenseIdToEdit)
        navigation.goBack();
    }

    function cancelHandler(){
        navigation.goBack();
    }

    function confirmHandler(expenseData : any){
        if(isEditing){
            ExpenseCtx.updateExpense(expenseIdToEdit, expenseData)
        }else{
            ExpenseCtx.addExpense(expenseData)
        }
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Text>{expenseIdToEdit}</Text>
            <ManageExpensesForm defaultExpense={selectedExpense} onSubmit={confirmHandler} submitButtonLAbel= {isEditing ? "Update" : "Add"} cancelHandler={cancelHandler} />
            
            <View style={styles.deleteContainer}>
                {isEditing  && <Ionicons name="trash"  color={GlobalStyles.Colors.error500} size={24} onPress={()=>deleteExpenseHandler()}/>}
            </View>
        </View>
    )
}


export default ManageExpenses;


const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        backgroundColor:GlobalStyles.Colors.primary800
    },
    deleteContainer:{
        marginTop:16,
        paddingTop:8,
        borderTopWidth:2,
        borderTopColor:GlobalStyles.Colors.primary200,
        alignItems:"center",

    }
})