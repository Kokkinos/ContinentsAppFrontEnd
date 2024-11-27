import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryLangDetailsComponent } from './country-lang-details.component';

describe('CountryLangDetailsComponent', () => {
  let component: CountryLangDetailsComponent;
  let fixture: ComponentFixture<CountryLangDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountryLangDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountryLangDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
