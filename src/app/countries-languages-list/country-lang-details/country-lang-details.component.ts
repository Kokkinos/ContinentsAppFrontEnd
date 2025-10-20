import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilityService } from '../../shared/services/utility.service';
import { Language } from '../../shared/models/models.model';

@Component({
    selector: 'app-country-lang-details',
    templateUrl: './country-lang-details.component.html',
    styleUrl: './country-lang-details.component.scss'
})
export class CountryLangDetailsComponent {

    countryLanguages = this.utilityService.languages;

    constructor(private route: ActivatedRoute,
        private utilityService: UtilityService,) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            const name = params.get('name');
            this.utilityService.setPageTitle(name);
            const code = params.get('code');

            this.utilityService.getCountryLanguages(code);
        });
    }
}
