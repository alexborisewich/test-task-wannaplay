import { Container, Typography, Button } from '@mui/material';
import { FC } from 'react';

import Answers from 'components/Answers';
import { useAppDispatch, useAppSelector } from 'hooks';
import { setQuestion, startGame } from 'store';

const containerStyles = { display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' };

const QuizeView: FC<Record<string, never>> = () => {
  const { questions, currentQuestion, isSubmited } = useAppSelector((state) => state.app);

  const dispatch = useAppDispatch();

  const questionData = questions[currentQuestion];

  const handleNextQuestion = () => {
    if (questions.every((q) => q.isAnswered)) {
      dispatch(startGame());
    }

    dispatch(setQuestion());
  };

  if (!questionData) return null;

  const { answers, questionId, text } = questionData;

  return (
    <Container component="section" sx={containerStyles}>
      <Typography variant="h4" textAlign="center" padding={{ sm: 1, md: 3, lg: 5 }}>
        {text}
      </Typography>
      <Answers data={answers} questionId={questionId} isSubmited={isSubmited} />
      <Button
        onClick={handleNextQuestion}
        size="large"
        type="button"
        variant="outlined"
        sx={{ alignSelf: 'center', margin: { sm: 1, md: 3, lg: 5 } }}>
        Next
      </Button>
    </Container>
  );
};
export default QuizeView;
