'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 600px;
  margin: 4rem auto;
  padding: 2rem;
  background: #f9f9ff;
  border-radius: 1rem;
`;

export default function ProfilePage() {
  const user = useSelector((state: RootState) => state.user);

  return (
    <Wrapper>
      <h2>Welcome, {user.name || 'Guest'}!</h2>
      <p>Your current level: {user.level}</p>
    </Wrapper>
  );
}
