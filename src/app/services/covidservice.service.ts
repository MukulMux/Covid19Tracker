import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CovidserviceService {

  apiUrlStats = "https://api.covid19api.com/summary";
 // apiUrlHelpline = "https://covid-19india-api.herokuapp.com/v2.0/helpline_numbers";

  constructor(private http:HttpClient) { }

  getCovidData(){
    return this.http.get(this.apiUrlStats);
  }

  // getHelplineData(){
  //   return this.http.get(this.apiUrlHelpline);
  // }
}
