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
export const changeUserRole=(role)=>{
    return {
        type:role.type,
        payload:role.payload,
    }
}
export const changeUserName=(name)=>{
    return {
        type:name.type,
        payload:name.payload,
    }
}
// export const changeModetoDark=()=>{ 
//     return {
//      type:'light',
//     }
// }
