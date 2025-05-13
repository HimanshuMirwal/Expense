import ExpensesOutput from "@/Components/Expenses/ExpensesOutput";
import { ExpenseContext } from "@/store/ExpenseContext";
import { useContext } from "react";

function AllExpenses(){

    const ExpenseCtx = useContext(ExpenseContext)


    return (
        <ExpensesOutput expenses={[...ExpenseCtx.expenses]} expensePeriod={"Total"} />
    )
}


export default AllExpenses;