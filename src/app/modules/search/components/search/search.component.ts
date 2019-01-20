import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    @Input() disabled = false;
    @Input() placeholder: string;
    @Output() search = new EventEmitter();
    keywords: string;

    constructor() {
    }

    ngOnInit() {
    }

    sendSearch(): void {
        this.search.emit(this.keywords);
    }

}
