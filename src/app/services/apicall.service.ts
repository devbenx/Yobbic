import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface FilmDetails {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: Date;
  edited: Date;
  url: string;
}



export interface PlanetDetails {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}





export interface ResultPeople {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
}

export interface RootObjectPeople {
  count: number;
  next: string;
  previous?: any;
  results: ResultPeople[];
}




export interface Result {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: Date;
  edited: Date;
  url: string;
}

export interface APIResult {
  count: number;
  next?: any;
  previous?: any;
  results: Result[];
}

@Injectable({
  providedIn: 'root'
})
export class APICallService {

  baseURL: string = 'https://swapi.dev/api';

  constructor(private http: HttpClient) { }

  getRESTAPIData(): Observable<RootObjectPeople> {
    return this.http.get<RootObjectPeople>(`${this.baseURL}/people`)
  }

  getDetails(id: string) {
    return this.http.get(`${this.baseURL}/people/${id}`)
  }

  getOrigin(url: string) {
    return this.http.get(`${url}`)
  }

  getCategories() {
    return this.http.get(`${this.baseURL}/`)
  }

  getCategoryItems(category: string) {
    return this.http.get<APIResult>(`${this.baseURL}/${category}`)
  }

  getPlanetDetails(url: string): Observable<PlanetDetails> {
    return this.http.get<PlanetDetails>(`${url}`);
  }

  getFilmDetails(url: string): Observable<FilmDetails> {
    return this.http.get<FilmDetails>(`${url}`);
  }
}
