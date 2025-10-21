import { Component } from '@angular/core';
import { UtilityService } from '../shared/services/utility.service';


@Component({
	selector: 'app-country-stats',
	templateUrl: './country-stats.component.html',
	styleUrl: './country-stats.component.scss'
})
export class CountryStatsComponent {
	countryStats = this.utilityService.countryStats;

	cols!: {
		field: string;
		header: string;
	}[];

	constructor(private utilityService: UtilityService) { }

	ngOnInit(): void {
		this.utilityService.setPageTitle('Stats')

		this.cols = [
			{ field: 'countryName', header: 'Name' },
			{ field: 'countryCode3', header: 'Country Code' },
			{ field: 'year', header: 'Year' },
			{ field: 'population', header: 'Population' },
			{ field: 'gdp', header: 'GDP' }
		];

		this.utilityService.getMaxGdpPerPopulation();
	}
}
