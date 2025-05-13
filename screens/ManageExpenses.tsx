import { GlobalStyles } from "@/constants/styles";
import { ExpenseContext } from "@/store/ExpenseContext";
import Button from "@/UI/Button";
import { Ionicons } from "@expo/vector-icons";
import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";

function ManageExpenses({route, navigation}:{route:any, navigation:any}){
    const expenseIdToEdit = route?.params?.expenseId || "";
    const isEditing = !!expenseIdToEdit;

    const ExpenseCtx = useContext(ExpenseContext);

    useLayoutEffect(() => {
      navigation.setOptions({
        title: isEditing ? "Edit Expense" : "Add Expense",
      });
    }, []);

    function deleteExpenseHandler(){
        ExpenseCtx.removeExpense(expenseIdToEdit)
    }

    function cancelHandler(){
        navigation.goBack();
    }

    function confirmHandler(){
        if(isEditing){
            // ExpenseCtx.updateExpense()
        }else{
            // ExpenseCtx.addExpense()
        }
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button style={styles.button} mode={"flat"} onPress={cancelHandler} >Cancel</Button>
                <Button style={styles.button} onPress={confirmHandler} >{isEditing ? "Update" : "Add"}</Button>
            </View>
            <View style={styles.deleteContainer}>
                {isEditing  && <Ionicons name="trash"  color={GlobalStyles.Colors.error500} size={24} onPress={()=>null}/>}
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

    },
    buttonContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        gap:16
    },
    button : {
        minWidth:120,
        marginHorizontal:8
    }
})