'use client';

import styled from 'styled-components';
import { lessons } from '@/data/lessons';
import Link from 'next/link';

const Wrapper = styled.div`
  max-width: 800px;
  margin: 4rem auto;
  padding: 2rem;
`;

const LessonCard = styled.div`
  background: #fff;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const LessonTitle = styled.h3`
  color: #1e1e60;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #3b82f6;
  }
`;


export default function LessonsPage() {
  return (
    <Wrapper>
      <h2>All Lessons</h2>
      {lessons.map((lesson) => (
        <LessonCard key={lesson.id}>
          <Link href={`/lessons/${lesson.id}`}>
            <LessonTitle>{lesson.title}</LessonTitle>
          </Link>
          <p>Level: {lesson.level}</p>
          <p>Category: {lesson.category}</p>
        </LessonCard>
      ))}
    </Wrapper>
  );
}
