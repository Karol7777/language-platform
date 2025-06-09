'use client';

import styled from 'styled-components';
import { FeatureCard } from '@/components/FeatureCard/FeatureCard';
import { FaBook, FaFont, FaListAlt, FaChartPie } from 'react-icons/fa';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
`;

export const FeatureGrid = () => (
  <Grid>
    <FeatureCard icon={<FaBook />} label="Grammar" />
    <FeatureCard icon={<FaFont />} label="Vocabulary" />
    <FeatureCard icon={<FaListAlt />} label="Lessons" />
    <FeatureCard icon={<FaChartPie />} label="Your Progress" />
  </Grid>
);
