import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Countries } from "./countries.modal";

@Injectable({
    providedIn:"root"
})
export class countriesService{
    constructor(private http:HttpClient){}

    public getCountries():Observable<Countries[]>{
        return this.http.get<Countries[]>("https://restcountries.eu/rest/v2/all");
    }


};