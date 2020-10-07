
const initialState = {
    data : []
};

const reducer = (state=initialState,action:any)=>{
    switch(action.type){
        case "FETCH":         
            return{
                ...state,
                data : state.data.concat(action.value)
            }
            break;
        case "INSERT":
        case "UPDATE": 
        case "DELETE":
            return{
                ...state,
                status : action.value
            }
            break;
    }
    return state;
};

export default reducer;