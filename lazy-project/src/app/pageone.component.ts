import { Component } from "@angular/core";

@Component({
    selector:"pageone",
    templateUrl:"./pageone.component.html"
})

export class pageOneComponent{
    var_one:string;
    constructor(){
        this.var_one = "Page One !!!";
    }
};