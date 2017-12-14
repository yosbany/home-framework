import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../app-animations';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
