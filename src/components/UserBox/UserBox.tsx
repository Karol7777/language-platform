'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { setName, incrementLevel } from '@/store/features/userSlice';
import styled from 'styled-components';
import { useState } from 'react';

const Wrapper = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  max-width: 400px;
  margin: 2rem auto;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  padding: 0.5rem;
  margin-right: 1rem;
  border-radius: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.5rem;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    background: #2563eb;
  }
`;

export const UserBox = () => {
  const dispatch = useDispatch();
  const { name, level } = useSelector((state: RootState) => state.user);
  const [newName, setNewName] = useState('');

  const handleChangeName = () => {
    dispatch(setName(newName));
    setNewName('');
  };

  return (
    <Wrapper>
      <h3>User Info</h3>
      <p><strong>Name:</strong> {name || 'Unknown'}</p>
      <p><strong>Level:</strong> {level}</p>

      <Input
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Enter new name"
      />
      <Button onClick={handleChangeName}>Change Name</Button>
      <br />
      <Button onClick={() => dispatch(incrementLevel())}>Level Up</Button>
    </Wrapper>
  );
};
