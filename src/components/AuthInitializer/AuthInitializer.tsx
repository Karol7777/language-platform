'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadUserFromStorage } from '@/store/slices/authSlice';

export const AuthInitializer = () => {
    const dispatch = useDispatch();
    console.log('AuthInitializer uruchomiony!');
    useEffect(() => {
        dispatch(loadUserFromStorage());
    }, [dispatch]);

    return null;
};
