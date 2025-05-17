import { GlobalStyles } from "@/constants/styles";
import { StyleSheet, Text, TextInput, View } from "react-native";

function Input({
  label,
  textInputConfig,
}: {
  label?: any;
  textInputConfig?: any;
}) {
    let inputStyles : any = [style.input];
    if(textInputConfig && textInputConfig.multiline){
        inputStyles.push(style.inputMultiLine)
    }
  return (
    <View style={style.container}>
      <Text style={style.label}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

export default Input;

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.Colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.Colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: GlobalStyles.Colors.primary800,
  },
  inputMultiLine : {
    minHeight:100,
    textAlignVertical:'top'
  }
});
