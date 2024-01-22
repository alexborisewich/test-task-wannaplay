import { IAppState } from 'interfaces';

export const initialState: IAppState = {
  questions: [],
  loading: true,
  currentQuestion: 0,
  questionResults: [],
  isGameStarted: false,
  isSubmited: false
};
