import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from '../shared/services/utility.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-top-bar-menu',
    templateUrl: './top-bar-menu.component.html',
    styleUrl: './top-bar-menu.component.scss'
})
export class TopBarMenuComponent {
    title = this.utilityService.pageTitle;

    constructor(
        private utilityService: UtilityService,
        private router: Router) { }

    onHome() {
        this.utilityService.setPageTitle('App')
        this.router.navigate(['/'])
    }

    onLanguages() {
        this.router.navigate(['/country-languages'])
    }

    onStats() {
        this.router.navigate(['/country-stats'])
    }

    onInfo() {
        this.router.navigate(['/filtered-table'])
    }
}
