import { List, Grid, ListItem, Button } from '@mui/material';
import { FC } from 'react';

import { AnswersProps } from './Answers.types';

import { useAppDispatch } from 'hooks';
import { IQuestionResult } from 'interfaces';
import { submitAnswer } from 'store';

const Answers: FC<AnswersProps> = ({ data, questionId, isSubmited }) => {
  const dispatch = useAppDispatch();

  const handleSubmitAnswer = (result: IQuestionResult) => {
    if (isSubmited) return;
    dispatch(submitAnswer(result));
  };

  return (
    <List component={Grid} padding={{ sm: 1, md: 3, lg: 5 }} spacing={{ sm: 0, md: 2 }} container>
      {data.map(({ answerId, answerText, isRight }) => (
        <ListItem key={answerId} component={Grid} item xs={12} md={6} lg={3}>
          <Button
            onClick={() => handleSubmitAnswer({ questionId, answerId, isRight: !!isRight })}
            color={isSubmited && isRight ? 'success' : 'primary'}
            variant="contained"
            size="large"
            fullWidth>
            {answerText}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default Answers;
