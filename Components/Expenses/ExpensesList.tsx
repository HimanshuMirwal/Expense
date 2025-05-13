import { FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

function RenderExpenseItem({ item }: { item: any }) {
  return <ExpenseItem {...item} />
}

function ExpensesList({ expenses }: { expenses: any }) {
  return (
    <FlatList
      data={expenses}
      renderItem={RenderExpenseItem}
      keyExtractor={(item)=>item._id}
    />
  );
}
export default ExpensesList;
