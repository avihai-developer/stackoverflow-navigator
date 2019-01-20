import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchPageComponent} from './search-page.component';
import {PageTitleModule} from '../../../page-title/page-title.module';
import {SearchModule} from '../../../search/search.module';
import {ListModule} from '../../../list/list.module';
import {ContentModule} from '../../../content/content.module';
import {StoreModule} from '@ngrx/store';
import {featureName, reducers} from '../../state';
import {HttpClientModule} from '@angular/common/http';

describe('SearchPageComponent', () => {
    let component: SearchPageComponent;
    let fixture: ComponentFixture<SearchPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                PageTitleModule,
                SearchModule,
                ListModule,
                ContentModule,
                StoreModule.forRoot(reducers),
                HttpClientModule
            ],
            declarations: [
                SearchPageComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
