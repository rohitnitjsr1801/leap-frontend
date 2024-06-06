import React from 'react';
import { useSelector } from 'react-redux';
import {Outlet, Navigate} from 'react-router-dom';

const ProtectedRoutes = () => {
    let token = useSelector(state => state.updateUserToken);

    return (
        token !== 'token' ? <Outlet/> : <Navigate to='/login'/>
    )
}

export default ProtectedRoutes