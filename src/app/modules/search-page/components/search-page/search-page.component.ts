import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {SearchPageStore} from '../../state';
import {StartSearch} from '../../state/search/search.actions';
import {Search, SearchStages} from '../../state/search/search';
import {ApiService} from '../../services/api/api.service';
import {Question} from '../../state/questions/question';
import {Content} from '../../../content/content';
import {Subscription} from 'rxjs';
import {questionsToArray} from '../../convertors/questions-to-array/questions-to-array';
import {questionToContent} from '../../convertors/question-to-content/question-to-content';

@Component({
    selector: 'app-search-page',
    templateUrl: './search-page.component.html',
    styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit, OnDestroy {

    pageTitle: string;
    search: Search;
    SearchStages = SearchStages;
    questions: Question[];
    questionsArray = [];
    selectedQuestion: Question;
    searchPlaceholder: string;
    selectedQuestionContent: Content[];

    // Subscribers
    search$: Subscription;
    searchStage$: Subscription;
    questions$: Subscription;

    constructor(
        private store: Store<SearchPageStore>,
        private apiService: ApiService
    ) {
        this.pageTitle = 'OP stackoverflow viewer';
        this.searchPlaceholder = 'Search tag in stackoverflow';
    }

    ngOnInit() {
        this.search$ = this.store.pipe(select('search-page', 'search'))
            .subscribe((search: Search) => {
                this.search = search;
            });
        this.searchStage$ = this.store.pipe(select('search-page', 'search', 'stage'))
            .subscribe((stage: SearchStages) => {
                switch (stage) {
                    case SearchStages.InProgress:
                        this.apiService.getQuestionsByTag(this.search.keywords);
                        break;
                }
            });
        this.questions$ = this.store.pipe(select('search-page', 'questions'))
            .subscribe((questions: Question[]) => {
                this.questions = questions;
                this.questionsArray = questionsToArray(this.questions);
            });
    }

    startSearch(keywords: string): void {
        if (keywords) {
            this.questions = [];
            this.questionsArray = questionsToArray(this.questions);
            this.store.dispatch(new StartSearch(keywords));
        }
    }

    selectQuestion(index: number): void {
        this.selectedQuestion = this.questions[index];
        this.selectedQuestionContent = questionToContent(this.selectedQuestion);
    }

    ngOnDestroy(): void {
        if (this.search$) {
            this.search$.unsubscribe();
        }
        if (this.searchStage$) {
            this.searchStage$.unsubscribe();
        }
        if (this.questions$) {
            this.questions$.unsubscribe();
        }
    }

}
