import {Action} from '@ngrx/store';
import {SearchStages} from './search';

export enum ActionTypes {
    StartSearch = 'StartSearch',
    StopSearch = 'StopSearch'
}

export class StartSearch implements Action {
    constructor (public keywords: string) {
    }
    readonly type = ActionTypes.StartSearch;
}

export class StopSearch implements Action {
    constructor (public searchStages: SearchStages) {
    }
    readonly type = ActionTypes.StopSearch;
}

export type SearchActions = StartSearch | StopSearch;
