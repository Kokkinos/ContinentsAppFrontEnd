import { Component } from '@angular/core';
import { UtilityService } from '../shared/services/utility.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-countries-languages-list',
    templateUrl: './countries-languages-list.component.html',
    styleUrl: './countries-languages-list.component.scss'
})
export class CountriesLanguagesListComponent {
    countries = this.utilityService.countries;

    cols!: {
        field: string;
        header: string;
    }[];

    constructor(
        private utilityService: UtilityService,
        private router: Router) { }

    ngOnInit(): void {
        this.utilityService.setPageTitle('Countries')

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'area', header: 'Area' },
            { field: 'countryCode2', header: 'Code' }
        ];

        this.utilityService.getCountries();

    }

    onRowClick(code: string, name: string) {
        this.router.navigate(['/country-languages/details', { code , name}])
    }
}
