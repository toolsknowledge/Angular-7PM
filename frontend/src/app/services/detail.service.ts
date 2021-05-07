import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import Product from "../modal/Product";

@Injectable({
    providedIn:"root"
})
export class detailService{
    constructor(private http:HttpClient){}

    //id will receive from DetailComponent
    public getProductDetails(id:any):Observable<Product>{
        return this.http.get<Product>(`http://localhost:8080/api/products/${id}`);
    }

};