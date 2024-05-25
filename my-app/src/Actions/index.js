export const changeUserId=(id)=>{
    return {
        type:id.type,
        payload:id.payload,
    }
}
export const changeUserToken=(token)=>{
    return {
        type:token.type,
        payload:token.payload,
    }
}
// export const changeModetoDark=()=>{ 
//     return {
//      type:'light',
//     }
// }
