import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { StaticInfoService } from '../../../@core/services/static-info.service';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(private router: Router, private _si: StaticInfoService) {

    }

    ngOnInit() {}

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
}
