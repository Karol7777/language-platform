'use client';

import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { logout } from '@/store/slices/authSlice';
import { useRouter } from 'next/navigation';

const Button = styled.button`
  margin-top: 1rem;
  background-color: #ef4444;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #dc2626;
  }
`;

export const LogoutButton = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogout = () => {
        dispatch(logout());
        router.push('/login'); // przekierowanie do logowania
    };

    return <Button onClick={handleLogout}>Log out</Button>;
};
