'use client';

import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '@/store/slices/authSlice';
import { useRouter } from 'next/navigation';

const Wrapper = styled.div`
  max-width: 400px;
  margin: 6rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  margin-top: 2rem;
  background-color: #3b82f6;
  color: white;
  font-size: 1rem;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #2563eb;
  }
`;

export const LoginPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleLogin = () => {
        if (!name.trim() || !email.trim()) {
            alert('Please enter both name and email');
            return;
        }

        const user = { name, email };

        localStorage.setItem('user', JSON.stringify(user));

        dispatch(login(user));
        router.push('/lessons');
    };

    return (
        <Wrapper>
            <h2>Log in</h2>
            <Input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Button onClick={handleLogin}>Log In</Button>
        </Wrapper>
    );
};
