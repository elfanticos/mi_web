import { Component } from '@angular/core';

@Component({
    selector: 'tutorials',
    templateUrl: 'tutorials.component.html',
    styleUrls: ['tutorials.component.css']
})

export class TutorialsComponent {
    title: string = 'TutorialsComponent';
    constructor() { }
}