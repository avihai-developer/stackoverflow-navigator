import {Search, SearchStages} from './search';
import {ActionTypes, SearchActions} from './search.actions';

export const initialState: Search = {
    keywords: '',
    stage: SearchStages.Idle
};

export function searchReducer(state = initialState, action: SearchActions): Search {
    switch (action.type) {
        case ActionTypes.StartSearch:
            if (
                state.stage === SearchStages.Idle ||
                state.stage === SearchStages.Error ||
                state.stage === SearchStages.NoResults ||
                state.stage === SearchStages.Success
            ) {
                state.keywords = action.keywords;
                state.stage = SearchStages.InProgress;
            }
            return state;
        case ActionTypes.StopSearch:
            if (
                state.stage === SearchStages.InProgress &&
                (
                    action.searchStages === SearchStages.Success ||
                    action.searchStages === SearchStages.NoResults ||
                    action.searchStages === SearchStages.Error
                )
            ) {
                state.stage = action.searchStages;
            }
            return state;
        default:
            return state;
    }
}
