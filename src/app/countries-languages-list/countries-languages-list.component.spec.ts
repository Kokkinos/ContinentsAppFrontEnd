import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesLanguagesListComponent } from './countries-languages-list.component';

describe('CountriesLanguagesListComponent', () => {
  let component: CountriesLanguagesListComponent;
  let fixture: ComponentFixture<CountriesLanguagesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountriesLanguagesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountriesLanguagesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
