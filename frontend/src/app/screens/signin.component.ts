import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
@Component({
    selector : "signin",
    templateUrl : "./signin.component.html"
})
export class SigninComponent{
    userDetails:FormGroup;
    constructor(){
        this.userDetails = new FormGroup({
            "email":new FormControl(),
            "password":new FormControl()
        })
    };

    login(){
        console.log(this.userDetails.value);
    }

};