import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICountry } from '../models/models.model';

@Injectable({
    providedIn: 'root'
})
export class UtilityService {
    private readonly apiUrl = 'http://localhost:8080';

    private pageTitleSubject = new BehaviorSubject<string>('Qualco');
    pageTitle$: Observable<string> = this.pageTitleSubject.asObservable();

    constructor(private http: HttpClient) { }

    setPageTitle(title: string): void {
        this.pageTitleSubject.next(title);
    }

    getCountries(): Observable<ICountry[]> {
        return this.http.get<any>(`${this.apiUrl}/countries`);
    }

    getCountryLanguages(id: number): Observable<string[]> {
        return this.http.get<any>(`${this.apiUrl}/countries/${id}/languages`);
    }
}
