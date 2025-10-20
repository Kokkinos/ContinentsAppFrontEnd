export interface ICountry {
    id?: number;
    name: string;
    area: number;
    countryCode2: string;
}

export interface CountryStats {
  countryName: string;
  countryCode3: number;
  year: number;
  population: number;
  gdp: number;
}

export interface Language {
  language: string;
  official: boolean;
}

export interface CountryInfo {
  continentName: string;
  regionName: string;
  countryStatsDTO: CountryStats;
  // countryName: string;
  // year: number;
  // population: number;
  // gdp: number;
}

export interface Region {
  name: string;
  code: string;
}