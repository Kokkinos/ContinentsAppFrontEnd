import { Component } from '@angular/core';
import { UtilityService } from '../shared/services/utility.service';
import { Router } from '@angular/router';
import { ICountry } from '../shared/models/models.model';

@Component({
    selector: 'app-countries-languages-list',
    templateUrl: './countries-languages-list.component.html',
    styleUrl: './countries-languages-list.component.scss'
})
export class CountriesLanguagesListComponent {

    data: ICountry[] = [];

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

        this.utilityService.getCountries()
            .subscribe(
                data => {
                    this.data = data;
                },
                error => {
                    console.error('Error from backend:', error);
                }
            );

    }

    onRowClick(code: string, name: string) {
        this.router.navigate(['/country-languages/details', { code , name}])
    }
}
