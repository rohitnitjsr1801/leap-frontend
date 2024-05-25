import React from 'react'
import { useSelector } from 'react-redux'
function OwnerHomePage() {
  let userId= useSelector(state => state.updateUserId);
  let userToken=useSelector(state=>state.updateUserToken);
  let userRole=useSelector(state=>state.updateUserRole);
  let userName=useSelector(state=>state.updateUserName);
  return (
    <>
    <div>OwnerHomePage</div>
    <h1>{userId}</h1>
    <h2>{userToken}</h2>
    <h1>{userRole}</h1>
    <h1>{userName}</h1>
    </>
  )
}

export default OwnerHomePage