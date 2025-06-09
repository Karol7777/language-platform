'use client';

import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { setName } from '@/store/features/userSlice';
import { useState } from 'react';

const Wrapper = styled.div`
  max-width: 400px;
  margin: 4rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
`;

const Button = styled.button`
  margin-top: 1.5rem;
  width: 100%;
  padding: 0.75rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #2563eb;
  }
`;

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = () => {
    if (username.trim()) {
      dispatch(setName(username));
      router.push('/profile');
    }
  };

  return (
    <Wrapper>
      <h2>Login</h2>
      <label>Enter your name:</label>
      <Input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="e.g. Karol"
      />
      <Button onClick={handleLogin}>Log In</Button>
    </Wrapper>
  );
}
