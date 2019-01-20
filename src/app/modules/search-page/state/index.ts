import {Search} from './search/search';
import {Question} from './questions/question';
import {ActionReducerMap} from '@ngrx/store';
import {questionsReducer} from './questions/questions.reducer';
import {searchReducer} from './search/search.reducer';

export const featureName = 'search-page';
export interface SearchPageStore {
    search: Search;
    questions: Question[];
}
export const reducers: ActionReducerMap<SearchPageStore> = {
    search: searchReducer,
    questions: questionsReducer
};
