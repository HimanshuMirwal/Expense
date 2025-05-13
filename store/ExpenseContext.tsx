import { createContext, useReducer } from "react";

const DUMMY_DATA = [
    {
        _id : "e1",
        description : "This is test",
        amount:59.99,
        date: new Date('2025-05-12')
    },
    {
        _id : "e2",
        description : "This is test-2",
        amount:59.99,
        date: new Date('2025-05-10')
    },
    {
        _id : "e3",
        description : "This is test-3",
        amount:59.99,
        date: new Date('2025-05-01')
    }
]

export const ExpenseContext = createContext({
    expenses : [],
    addExpense:({amount, description, date}:{amount:any, description:any, date:any})=>{},
    removeExpense:(id:any)=>{},
    updateExpense:(id:any, {amount, description, date}:{amount:any, description:any, date:any})=>{}
});


function expenseReducer(state:any, action:any){
    switch(action.type){
        case 'add':
            const id = new Date().toString() + Math.random().toString();
            return [{...action.payload, id:id},...state]
        case 'delete':
            return state.filter((data:any)=>data.id != action.payload)
        case 'update':
            const updatableExpenseIndex = state.findIndex((expense:any)=>{expense.id == action.payload.id});
            const updatableExpense = state[updatableExpenseIndex];
            const updatedItem = {...updatableExpense, ...action.payload.data}
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updatedItem;
            return updatedExpenses
        default: return state
    }
}


function ExpensesContextProvider({children}:{children:any}){

    const [expenseState, dispatch] = useReducer(expenseReducer, DUMMY_DATA);
    

    function addExpense({ amount, description, date }: { amount: any; description: any; date: any }) {
        dispatch({ type: 'add', payload: { amount, description, date } });
    }
    function delExpense(id : any){
        dispatch({type: 'delete', payload : id })
    }
     function updateExpense(id : any, expenseData:any ){
        dispatch({type: 'update', payload : {id, data : expenseData} })
    }

    const value = {
      expenses: expenseState,
      addExpense: addExpense,
      removeExpense: delExpense,
      updateExpense: updateExpense,
    };

    return ( 
        <ExpenseContext.Provider value={value} >
            {children}
        </ExpenseContext.Provider>
    )
}


export default ExpensesContextProvider;