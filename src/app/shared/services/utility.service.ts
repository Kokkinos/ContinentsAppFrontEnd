import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { CountryInfo, ICountry, Language, Region } from '../models/models.model';
import { CountryStats } from '../models/models.model';

@Injectable({
    providedIn: 'root'
})
export class UtilityService {
    private readonly apiUrl = 'http://localhost:8080/api';
    countries = signal<ICountry[]>([]);
    languages = signal<Language[]>([]);
    countryStats = signal<CountryStats[]>([]);
    pageTitle = signal<string>('App');
    countryInfo = signal<CountryInfo[]>([]);
    regions = signal<Region[]>([]);

    constructor(private http: HttpClient) { }

    setPageTitle(title: string): void {
        this.pageTitle.set(title);
    }

    getCountries() {
        this.http.get<any>(`${this.apiUrl}/countries`).subscribe(data => {
            this.countries.set(data);
        });
    }

    getCountryLanguages(code: string) {
        this.http.get<any>(`${this.apiUrl}/countries/${code}/languages`).subscribe(data => {
            this.languages.set(data);
        });
    }

    getMaxGdpPerPopulation() {
        this.http.get<any>(`${this.apiUrl}/stats/max-per-country`).subscribe(data => {
            this.countryStats.set(data);
        });
    }

    getRegions() {
        this.http.get<any>(`${this.apiUrl}/regions`).subscribe(data => {
            this.regions.set(data);
        });
    }

    // getCountryInfo() {
    //     this.http.get<any>(`${this.apiUrl}/stats/by-region`).subscribe(data => {
    //         this.countryInfo.set(data);
    //     })
    // }

    getCountryInfo(regionName?: string) {
        let url = `${this.apiUrl}/stats/by-region?from=2000&to=2020&page=0&size=20`;
        if (regionName) {
            url += `&regionName=${encodeURIComponent(regionName)}`;
        }
        this.http.get<any[]>(url).subscribe(data => {
            this.countryInfo.set(data);
        });
    }
}
