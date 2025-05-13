import { GlobalStyles } from "@/constants/styles";
import { FormetDate } from "@/util/date";
import { useNavigation } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

function ExpenseItem({_id, description, date, amount}:{_id:any, description:any, date:any, amount:any}) {
  const navigator = useNavigation<any>();
  function expenseHandler(){
    navigator.navigate("ManageExpenses",{expenseId : _id});
  }

  return (
    <Pressable onPress={expenseHandler} style={({pressed})=>pressed && Styles.pressed}>
      <View style={Styles.expenseItem}>
        <View>
          <Text style={[Styles.textBase, Styles.description]}>{description}</Text>
          <Text style={[Styles.textBase]}>{FormetDate(date)}</Text>
        </View>
        <View style={[Styles.amountContainer]}>
          <Text style={[Styles.amount]}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}
export default ExpenseItem;



const Styles = StyleSheet.create({
    expenseItem : {
        padding:12,
        marginVertical:8,
        backgroundColor:GlobalStyles.Colors.primary500,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderRadius:6,
        elevation:3,
        shadowColor:GlobalStyles.Colors.gray500,
        shadowRadius:4,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowOpacity:0.4
    },
    pressed:{
      opacity:0.75
    },
    textBase : {
         color:GlobalStyles.Colors.primary50
    },
    description : {
        fontSize:16,
        marginBottom:4,
        fontWeight:700
    },
    amountContainer:{
        paddingHorizontal:12,
        paddingVertical:4,
        backgroundColor:"#fff",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:4,
        minWidth:80
    },
    amount : {
        color:GlobalStyles.Colors.primary500,
        fontWeight:700
    }
})