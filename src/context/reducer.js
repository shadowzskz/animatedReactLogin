export const initialState = {
    user: null,
    transactions: [],
}


function reducer(state, action) {
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, action.item],
            }
        case 'DELETE_TRANSACTION':
            let newTransaction  = [...state.transactions];
            const index = state.transactions.findIndex((transaction) => transaction.id === action.id);
            if(index >= 0) {
                //item exist in the basket, remove it
                newTransaction.splice(index, 1) 
            } else {
                console.warn (
                    `Can't remove product{id: ${action.id}} as it is not in the basket`
                );
            }
            return{
                ...state,
                transactions: newTransaction
            };
        default:   
            return state;
    }
}

export default reducer;

