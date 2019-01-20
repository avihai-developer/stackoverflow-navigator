import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    private _list: string[];

    @Input()
    get list(): string[] {
        return this._list;
    }
    set list(value: string[]) {
        this.selectedItemIndex = undefined;
        this._list = value;
    }

    @Output() selectedIndex = new EventEmitter<number>();
    selectedItemIndex: number;

    constructor() {
    }

    ngOnInit() {
    }

    selectItem(index: number): void {
        this.selectedItemIndex = index;
        this.selectedIndex.emit(index);
    }

}
