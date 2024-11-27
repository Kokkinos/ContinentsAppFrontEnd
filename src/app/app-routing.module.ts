import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CountriesLanguagesListComponent } from './countries-languages-list/countries-languages-list.component';
import { CountryLangDetailsComponent } from './countries-languages-list/country-lang-details/country-lang-details.component';

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

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
