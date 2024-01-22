export interface IAppState {
  questions: IQuestion[];
  loading: boolean;
  error?: string;
  currentQuestion: number;
  questionResults: IQuestionResult[];
  isGameStarted: boolean;
  isSubmited: boolean;
}

export interface IQuestionResult {
  questionId: number;
  answerId: number;
  isRight: boolean;
}

export interface IQuestion {
  questionId: number;
  text: string;
  answers: IAnswer[];
  isAnswered?: boolean;
}

export interface IAnswer {
  answerId: number;
  answerText: string;
  isRight?: boolean;
}

export interface IGetDataResponse {
  steps: IQuestion[];
}
