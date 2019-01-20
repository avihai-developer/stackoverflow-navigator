import {TestBed} from '@angular/core/testing';

import {ApiService} from './api.service';
import {HttpClientModule} from '@angular/common/http';
import {select, Store, StoreModule} from '@ngrx/store';
import {featureName, reducers, SearchPageStore} from '../../state';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

describe('ApiService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            HttpClientModule,
            StoreDevtoolsModule.instrument(),
            StoreModule.forRoot(reducers),
            StoreModule.forFeature(featureName, reducers)
        ]
    }));

    it('should be created', () => {
        const service: ApiService = TestBed.get(ApiService);
        expect(service).toBeTruthy();
    });

    it('should clear questions if request failed', async () => {
        // const service: ApiService = TestBed.get(ApiService);
        // const store: Store<SearchPageStore> = TestBed.get(Store);
        // const questions = await store.pipe(select('search-page', 'search')).toPromise();
        // console.log('questions', questions);
        // service.getQuestionsByTag('tag');
        // const questions = await store.pipe(select('search-page')).toPromise();
        // console.log('questions', questions);
    });

});
