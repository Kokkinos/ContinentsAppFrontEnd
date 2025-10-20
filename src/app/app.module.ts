import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TableModule } from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarMenuComponent } from './top-bar-menu/top-bar-menu.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CountriesLanguagesListComponent } from './countries-languages-list/countries-languages-list.component';
import { CountryLangDetailsComponent } from './countries-languages-list/country-lang-details/country-lang-details.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryStatsComponent } from './country-stats/country-stats.component';
import { FilteredTableComponent } from './filtered-table/filtered-table.component';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    declarations: [
        AppComponent,
        TopBarMenuComponent,
        HomepageComponent,
        CountriesLanguagesListComponent,
        CountryLangDetailsComponent,
        CountryStatsComponent,
        FilteredTableComponent
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        TableModule,
        FormsModule,
        DropdownModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
