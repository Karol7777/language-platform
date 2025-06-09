'use client';

import styled from 'styled-components';

const Wrapper = styled.section`
  text-align: center;
  padding: 4rem 2rem;
  background-color: #f5f5fa;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #1e1e60;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #666;
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

export const HomeHeader = () => (
  <Wrapper>
    <Title>Language Learning Platform</Title>
    <Subtitle>Learn languages easily!</Subtitle>
    <Button>Get Started</Button>
  </Wrapper>
);
