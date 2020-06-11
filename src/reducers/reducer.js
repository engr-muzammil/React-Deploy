const iState = {
    name:"My Initial data click below to change from API",
    wish:['eat','code']
}

const reducer = (state=iState,action) =>{
    if(action.type ==='CHANGE_NAME'){
        return{
            ...state,
            name: action.payload
        }
    }
    return state;
}



export default reducer;