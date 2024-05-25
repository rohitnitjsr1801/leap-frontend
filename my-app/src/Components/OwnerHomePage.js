import React from 'react'
import { useSelector } from 'react-redux'
function OwnerHomePage() {
  let userId= useSelector(state => state.updateUserId);
  let userToken=useSelector(state=>state.updateUserToken);
  return (
    <>
    <div>OwnerHomePage</div>
    <h1>{userId}</h1>
    <h2>{userToken}</h2>
    </>
  )
}

export default OwnerHomePage