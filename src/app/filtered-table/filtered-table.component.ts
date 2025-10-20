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
  countryInfo = this.utilityService.countryInfo;
  regions = this.utilityService.regions;
  selectedRegion: string | null = null;

  cols!: {
    field: string;
    header: string;
  }[]

  constructor(private utilityService: UtilityService) { }


  ngOnInit(): void {
    this.utilityService.setPageTitle('Country-Info')
    this.utilityService.getCountryInfo();
    this.utilityService.getRegions();

    this.cols = [
      { field: 'continentName', header: 'Continent' },
      { field: 'regionName', header: 'Region' },
      { field: 'countryName', header: 'Country' },
      { field: 'year', header: 'Year' },
      { field: 'population', header: 'Population' },
      { field: 'gdp', header: 'GDP' }
    ]
  }

  // this.cols = [
  //   { field: 'name', header: 'Name' },
  //   { field: 'countryId', header: 'Country Code' },
  //   { field: 'year', header: 'Year' },
  //   { field: 'population', header: 'Population' },
  //   { field: 'gdp', header: 'GDP' }
  // ];

  onRegionChange(): void {
    console.log(this.selectedRegion);
  }
}


