//@shippingAddress
//fullName
//address
//city
//country
//pinCode

import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector:"shipping",
    templateUrl:"./shipping.component.html"
})
export class shippingComponent{
    shippingAddress:FormGroup;
    constructor(){
        this.shippingAddress = new FormGroup({
            fullName : new FormControl(),
            address : new FormControl(),
            city : new FormControl(),
            country : new FormControl(),
            pinCode : new FormControl()
        })
    };

    shipping(){
        console.log( this.shippingAddress.value );
    };



};