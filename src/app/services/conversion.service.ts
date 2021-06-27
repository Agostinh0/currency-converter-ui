import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {

  constructor(private http:HttpClient) { }

  baseUrl = 'https://free.currconv.com';

  getRate(originalCurrency:string, currencyToConvert:string) {
    return this.http
      .get(`${this.baseUrl}/api/v7/convert?q=${originalCurrency}_${currencyToConvert}&compact=ultra&apiKey=e9e9513f302795759053`);
  }

}
