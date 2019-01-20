import {Component, Input, OnInit} from '@angular/core';
import {Content, ContentTypes} from '../../content';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

    @Input() content: Content[];
    ContentTypes = ContentTypes;

    constructor() {
    }

    ngOnInit() {
    }

}
