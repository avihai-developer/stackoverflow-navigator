import {Question} from './question';
import {ActionTypes, QuestionsActions} from './questions.actions';

export const initialState: Question[] = [];

export function questionsReducer(state = initialState, action: QuestionsActions): Question[] {
    switch (action.type) {
        case ActionTypes.SetQuestions:
            state = action.questions;
            return state;
        default:
            return state;
    }
}
