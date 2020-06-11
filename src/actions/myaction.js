// export const anothername = (name) =>{
//     return{
//         type:'CHANGE_NAME',
//         payload:name
//     }
// }


export const anothername = () =>{
    return async (dispatch) =>{
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const res2 = await data.json()
        //.then(res=>res.json())
        // .then(res2=>{
        //     dispatch({type:'CHANGE_NAME',payload:res2[0].name})
        dispatch({type:'CHANGE_NAME',payload:res2[0].name})
    }
}