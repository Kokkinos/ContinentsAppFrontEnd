import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilityService } from '../../shared/services/utility.service';

@Component({
    selector: 'app-country-lang-details',
    templateUrl: './country-lang-details.component.html',
    styleUrl: './country-lang-details.component.scss'
})
export class CountryLangDetailsComponent {

    countryLanguages: string[] = [];

    constructor(private route: ActivatedRoute,
        private utilityService: UtilityService,) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            const name = params.get('name');
            this.utilityService.setPageTitle(name);

            const countryId = Number(params.get('id'));
            this.utilityService.getCountryLanguages(countryId)
                .subscribe(
                    data => {
                        this.countryLanguages = data;
                    },
                    error => {
                        console.error('Error from backend:', error);
                    }
                );
        });
    }
}
