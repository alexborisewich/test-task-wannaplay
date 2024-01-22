import { IAnswer } from 'interfaces';

export type AnswersProps = {
  data: IAnswer[];
  questionId: number;
  isSubmited: boolean;
};
