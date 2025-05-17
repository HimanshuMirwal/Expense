import Button from "@/UI/Button";
import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import Input from "./Input";

function ManageExpensesForm({cancelHandler, onSubmit,  submitButtonLAbel, defaultExpense}:{cancelHandler:any, onSubmit:any, submitButtonLAbel:any, defaultExpense?:any}) {
  const [amount, setAmount] = useState(defaultExpense?.amount.toString() || "");
  const [date, setDate] = useState(defaultExpense?.date.toString() || "");
  const [description, setDescription] = useState(defaultExpense?.description.toString() || "");
  function amountUpdateChangeHandler(enteredAmount: any) {
    setAmount(enteredAmount);
  }
  function dateUpdateChangeHandler(enteredDate: any) {
    setDate(enteredDate);
  }
  function descriptionUpdateChangeHandler(enteredDesc: any) {
    setDescription(enteredDesc);
  }

  function submitHandler(){
    const expenseData = {
        amount : parseFloat(amount),
        date: new Date(date),
        description : description
    }


    const amountIsValid = !isNaN(amount) && amount > 0;
    const dateIsValid = date.toString() != 'Invalid Date'
    const descriptionIsValid = description.trim().length > 0;

    if(!amountIsValid || !dateIsValid || !descriptionIsValid){
        Alert.alert("Invalid Input", "Please check you input values");
        return
    }

    onSubmit(expenseData);
  }
  return (
    <View>
      <View style={styles.inputRow}>
        <Input
          label={"Amount"}
          textInputConfig={{
            value: amount,
            keyboardType: "decimal-pad",
            onChangeText: amountUpdateChangeHandler,
          }}
        />
      </View>
      <View style={styles.inputRow}>
        <Input
          label={"Date"}
          textInputConfig={{
            value: date,
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            keyboardType: "decimal-pad",
            onChangeText: dateUpdateChangeHandler,
          }}
        />
      </View>
      <View style={styles.inputRow}>
        <Input
          label={"Description"}
          textInputConfig={{
            value: description,
            multiline: true,
            autoCorrect: true,
            onChangeText: descriptionUpdateChangeHandler,
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} mode={"flat"} onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLAbel}
        </Button>
      </View>
    </View>
  );
}

export default ManageExpensesForm;

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
