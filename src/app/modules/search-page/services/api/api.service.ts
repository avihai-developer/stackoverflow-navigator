import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {SearchPageStore} from '../../state';
import {StopSearch} from '../../state/search/search.actions';
import {SearchStages} from '../../state/search/search';
import {SetQuestions} from '../../state/questions/questions.actions';
import {stackexchangeToQuestions} from '../../convertors/stackexchange-to-questions/stackexchange-to-questions';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private apiUrl = 'https://api.stackexchange.com/2.2/';

    constructor(
        private httpClient: HttpClient,
        private store: Store<SearchPageStore>,
    ) {
    }

    getQuestionsByTag(tag: string): void {
        this.httpClient.get(this.apiUrl + 'tags/' + encodeURIComponent(tag) + '/faq?site=stackoverflow')
            .subscribe(
                (response) => {
                    const questions = stackexchangeToQuestions(response);
                    this.store.dispatch(new SetQuestions(questions));
                    if (questions.length) {
                        this.store.dispatch(new StopSearch(SearchStages.Success));
                    } else {
                        this.store.dispatch(new StopSearch(SearchStages.NoResults));
                    }
                },
                (error) => {
                    this.store.dispatch(new SetQuestions([]));
                    this.store.dispatch(new StopSearch(SearchStages.Error));
                }
            );
    }

}
