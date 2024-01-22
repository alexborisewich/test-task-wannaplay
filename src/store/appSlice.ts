import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { initialState } from './initialState';

import { IGetDataResponse, IQuestionResult } from 'interfaces';

export const fetchData = createAsyncThunk('app/fetchData', async () => {
  const response = await axios.get<IGetDataResponse>('steps.json');
  return response.data;
});

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setQuestion: (state) => {
      if (state.currentQuestion < state.questions.length - 1) {
        state.currentQuestion += 1;
      } else {
        state.currentQuestion = 0;
      }
      state.isSubmited = false;
      if (state.questions && state.questions[state.currentQuestion]) {
        state.questions[state.currentQuestion]!.answers = state.questions[state.currentQuestion]!.answers.sort(
          () => Math.random() - 0.5
        );
      }
    },
    submitAnswer: (state, action: PayloadAction<IQuestionResult>) => {
      state.isSubmited = true;
      const question = state.questions.find((q) => q.questionId === action.payload.questionId);
      if (question && action.payload.isRight) {
        question.isAnswered = true;
      }
      state.questionResults.push(action.payload);
    },
    startGame: (state) => {
      state.isGameStarted = true;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.questions = action.payload.steps;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default appSlice.reducer;
export const { setQuestion, submitAnswer, startGame } = appSlice.actions;
