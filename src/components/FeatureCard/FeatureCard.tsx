'use client';

import styled from 'styled-components';
import { ReactNode } from 'react';

const Card = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Icon = styled.div`
  font-size: 2rem;
`;

const Label = styled.div`
  font-weight: bold;
  color: #1e1e60;
`;

export const FeatureCard = ({ icon, label }: { icon: ReactNode; label: string }) => (
  <Card>
    <Icon>{icon}</Icon>
    <Label>{label}</Label>
  </Card>
);
