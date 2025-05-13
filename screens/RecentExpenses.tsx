import ExpensesOutput from "@/Components/Expenses/ExpensesOutput";
import { ExpenseContext } from "@/store/ExpenseContext";
import { getDateMinusDays } from "@/util/date";
import { useContext } from "react";

function RecentExpenses(){
    const ExpenseCtx = useContext(ExpenseContext)

    const recentExpenses = ExpenseCtx.expenses.filter((expense:any)=>{
        const todays  = new Date();
        const date7DaysAgo = getDateMinusDays(todays, 7);

        return expense.date  > date7DaysAgo;
    })


    return (
        <ExpensesOutput expenses={[...recentExpenses]}  expensePeriod={"Last 7 Days"} />
    )
}


export default RecentExpenses;