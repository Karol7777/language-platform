'use client';

import { useParams } from 'next/navigation';
import { lessons } from '@/data/lessons';
import styled from 'styled-components';
import { useState } from 'react';

const Wrapper = styled.div`
  max-width: 800px;
  margin: 4rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
`;

const QuestionBlock = styled.div`
  margin-top: 2rem;
`;

const Option = styled.label`
  display: block;
  margin-top: 0.5rem;
  cursor: pointer;
`;

const Result = styled.div`
  margin-top: 2rem;
  font-weight: bold;
  color: #1e1e60;
`;

export default function LessonDetailPage() {
  const params = useParams();
  const id = typeof params.id === 'string' ? params.id : undefined;
  const lesson = lessons.find((l) => l.id === id);

  const [answers, setAnswers] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);

  if (!lesson) {
    return <Wrapper>Lesson not found 😢</Wrapper>;
  }

  const handleOptionSelect = (questionIndex: number, optionIndex: number) => {
    const updated = [...answers];
    updated[questionIndex] = optionIndex;
    setAnswers(updated);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const score = lesson.quiz?.reduce((acc, q, i) => {
    return q.correctAnswer === answers[i] ? acc + 1 : acc;
  }, 0);

  return (
    <Wrapper>
      <h2>{lesson.title}</h2>
      <p><strong>Level:</strong> {lesson.level}</p>
      <p><strong>Category:</strong> {lesson.category}</p>

      {lesson.quiz?.map((q, i) => (
        <QuestionBlock key={i}>
          <p>{i + 1}. {q.question}</p>
          {q.options.map((option, j) => (
            <Option key={j}>
              <input
                type="radio"
                name={`question-${i}`}
                checked={answers[i] === j}
                onChange={() => handleOptionSelect(i, j)}
              />
              {option}
            </Option>
          ))}
        </QuestionBlock>
      ))}

      {!submitted && (
        <button style={{ marginTop: '2rem' }} onClick={handleSubmit}>
          Submit Quiz
        </button>
      )}

      {submitted && (
        <Result>
          You scored {score} out of {lesson.quiz?.length}
        </Result>
      )}
    </Wrapper>
  );
}
