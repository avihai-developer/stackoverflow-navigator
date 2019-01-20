import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SearchPageRoutingModule} from './search-page-routing.module';
import {SearchPageComponent} from './components/search-page/search-page.component';
import {ContentModule} from '../content/content.module';
import {ListModule} from '../list/list.module';
import {SearchModule} from '../search/search.module';
import {PageTitleModule} from '../page-title/page-title.module';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {featureName, reducers} from './state';

@NgModule({
    declarations: [SearchPageComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        StoreModule.forFeature(featureName, reducers),
        SearchPageRoutingModule,
        PageTitleModule,
        ContentModule,
        ListModule,
        SearchModule
    ]
})
export class SearchPageModule {
}
