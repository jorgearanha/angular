import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestCountryApiModel } from './rest-country-api-model';

@Injectable({
  providedIn: 'root'
})
export class PesquisaPaisesService {

  private baseUrl = 'https://restcountries.eu/rest/v2/lang/';
  private baseUrlCont = 'https://restcountries.eu/rest/v2/region/';

  constructor(private http: HttpClient) {

  }

  public ListarPaises(langCode: string) {
    return this.http.get<RestCountryApiModel[]>(this.baseUrl + langCode);
  }

  public ListarPaisesPorContinente(continente: string) {
    return this.http.get<RestCountryApiModel[]>(this.baseUrlCont + continente);
  }
}
