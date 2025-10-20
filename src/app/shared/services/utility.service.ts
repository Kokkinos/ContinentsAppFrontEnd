import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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

    // private pageTitleSubject = new BehaviorSubject<string>('App');
    // pageTitle$: Observable<string> = this.pageTitleSubject.asObservable();

    constructor(private http: HttpClient) { }

    setPageTitle(title: string): void {
        this.pageTitle.set(title);
    }

    getCountries() {
        // return this.http.get<any>(`${this.apiUrl}/countries`);
        this.http.get<any>(`${this.apiUrl}/countries`).subscribe(data => {
            this.countries.set(data);
        });
    }

    getCountryLanguages(code: string) {
        // return this.http.get<any>(`${this.apiUrl}/countries/${code}/languages`);
        this.http.get<any>(`${this.apiUrl}/countries/${code}/languages`).subscribe(data => {
            this.languages.set(data);
        });
    }

    getMaxGdpPerPopulation() {
        this.http.get<any>(`${this.apiUrl}/stats/max-per-country`).subscribe(data => {
            this.countryStats.set(data);
        });
    }

    getRegions(){
        this.http.get<any>(`${this.apiUrl}/regions`).subscribe(data => {
            this.regions.set(data);
        });
    }

    getCountryInfo() {
        this.http.get<any>(`${this.apiUrl}/stats/by-region`).subscribe(data => {
            this.countryInfo.set(data);
        })
    }
}
