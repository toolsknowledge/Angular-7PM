import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:"root"
})

export class dummyService{
    constructor(private http:HttpClient){}
    public dummyFunction(id):Observable<any>{
        return this.http.get("https://restcountries.eu/rest/v2/all");
    }
}