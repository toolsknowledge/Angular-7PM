import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import CartModal from "../modal/cart.modal";

@Injectable({
    providedIn:"root"
})
export class CartService{
    constructor(private http:HttpClient){}
    public getCartItem(id:any):Observable<CartModal>{
        return this.http.get<CartModal>(`http://localhost:8080/api/products/${id}`);
    }
};