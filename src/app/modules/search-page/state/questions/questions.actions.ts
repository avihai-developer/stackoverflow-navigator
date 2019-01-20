import {Action} from '@ngrx/store';
import {Question} from './question';

export enum ActionTypes {
    SetQuestions = 'SetQuestions'
}

export class SetQuestions implements Action {
    constructor (public questions: Question[]) {
    }
    readonly type = ActionTypes.SetQuestions;
}

export type QuestionsActions = SetQuestions;
