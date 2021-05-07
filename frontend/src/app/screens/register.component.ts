//Component
//registerForm  (main) FormGroup
//name  (child1)  FormControl
//email  (child2)
//password  (child3)
//confirmPassword (child4)

import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
@Component({
    selector : "register",
    templateUrl : "./register.component.html"
})
export class registerComponent{
    registerForm:FormGroup;

    constructor(){
        this.registerForm = new FormGroup({
            name : new FormControl(),
            email : new FormControl(),
            password : new FormControl(),
            confirmPassword : new FormControl()  
        })
    };

    register(){
        if(this.registerForm.value.password != this.registerForm.value.confirmPassword ){
            alert("password and confirm password should be same")
        }else{
            console.log(this.registerForm.value);
        }
    };

};
