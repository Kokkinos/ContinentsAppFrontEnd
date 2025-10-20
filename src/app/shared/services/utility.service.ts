import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CountryInfo, ICountry, Language } from '../models/models.model';
import { CountryStats } from '../models/models.model';

@Injectable({
    providedIn: 'root'
})
export class UtilityService {
    private readonly apiUrl = 'http://localhost:8080/api';

    private pageTitleSubject = new BehaviorSubject<string>('App');
    pageTitle$: Observable<string> = this.pageTitleSubject.asObservable();

    constructor(private http: HttpClient) { }

    setPageTitle(title: string): void {
        this.pageTitleSubject.next(title);
    }

    getCountries(): Observable<ICountry[]> {
        return this.http.get<any>(`${this.apiUrl}/countries`);
    }

    getCountryLanguages(code: string): Observable<Language[]> {
        return this.http.get<any>(`${this.apiUrl}/countries/${code}/languages`);
    }

    getMaxGdpPerPopulation(): Observable<CountryStats[]> {
      return this.http.get<any>(`${this.apiUrl}/stats/max-per-country`);
    }

}
