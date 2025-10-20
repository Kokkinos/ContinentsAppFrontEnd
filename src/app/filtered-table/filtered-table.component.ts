import { Component, Input } from '@angular/core';
import { CountryInfo, Region } from '../shared/models/models.model';
import { UtilityService } from '../shared/services/utility.service';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { AppModule } from '../app.module';
import { SelectItem } from 'primeng/api';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-filtered-table',
  standalone: false,
  templateUrl: './filtered-table.component.html',
  styleUrl: './filtered-table.component.scss',
  // imports: [DropdownModule, FormsModule]
})
export class FilteredTableComponent {
    @Input() results?: CountryInfo[];
    countryInfoList: CountryInfo[] = [];
    unfilteredCountryInfoList: CountryInfo[] = [];
    regions: SelectItem[] = [];
    selectedRegion: string = ' ';


    constructor(private utilityService: UtilityService) { }
    

    ngOnInit(): void {
      this.utilityService.setPageTitle('Country-Info')
  
      // this.cols = [
      //   { field: 'name', header: 'Name' },
      //   { field: 'countryId', header: 'Country Code' },
      //   { field: 'year', header: 'Year' },
      //   { field: 'population', header: 'Population' },
      //   { field: 'gdp', header: 'GDP' }
      // ];
      

      // this.utilityService.getCombinedResults().subscribe(
      //   countryInfoList => {
      //     this.countryInfoList = countryInfoList;
      //     this.unfilteredCountryInfoList = [...countryInfoList];
      //     const uniqueRegions = Array.from(new Set(countryInfoList.map(info => info.regionName)));
      //     this.regions = [...uniqueRegions.map(region => ({label : region, value: region}))];
      //       // this.countryInfoList.map(info => ({label: info.regionName, value: info.regionName}));
          
      //     console.log(this.regions);
      //   },
      //   error => {
      //     console.error('Error fetching countryStats:', error);
      //   }
      // );
    }

  onRegionChange(): void {
    console.log(this.selectedRegion);
    console.log(this.unfilteredCountryInfoList);
    if (this.selectedRegion) {
      this.countryInfoList = this.unfilteredCountryInfoList.filter( (info) => (info.regionName.trim().toLowerCase() == this.selectedRegion.trim().toLowerCase()));
      // this.countryInfoList = [{continentName: 'Asia', regionName: 'Asia', countryStatsDTO:{name:'Pakistan', countryId: 2, year: 2012, population: 312222, gdp: 201111, gdpPerPopulation: 2111}}];
      // this.countryInfoList = [...this.unfilteredCountryInfoList];
    }
    else {
      this.countryInfoList = [...this.unfilteredCountryInfoList];
    }
    console.log(this.countryInfoList);
  }
}
