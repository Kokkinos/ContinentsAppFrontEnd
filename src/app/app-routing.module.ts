import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CountriesLanguagesListComponent } from './countries-languages-list/countries-languages-list.component';
import { CountryLangDetailsComponent } from './countries-languages-list/country-lang-details/country-lang-details.component';
import { CountryStatsComponent } from './country-stats/country-stats.component'
import { FilteredTableComponent } from './filtered-table/filtered-table.component';

const routes: Routes = [
    {
        path: '',
        component: HomepageComponent
    },
    {
        path: 'country-languages',
        component: CountriesLanguagesListComponent
    },
    {
        path: 'country-languages/details',
        component: CountryLangDetailsComponent
    },
    {
        path: 'country-stats',
        component: CountryStatsComponent
    },
    {
        path: 'filtered-table',
        component: FilteredTableComponent
    }

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
