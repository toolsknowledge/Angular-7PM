import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import { SpinnerVisibilityService } from "ng-http-loader";
import { Countries } from "./countries.modal";
import { countriesService } from "./countries.service";

@Component({
    selector:"countries",
    templateUrl:"./countries.component.html"
})
export class countriesComponent{
    result:Countries[];
    constructor(private service:countriesService,
                private spinner:SpinnerVisibilityService){}
    ngOnInit(){
        this.spinner.show();
        this.service.getCountries().subscribe((posRes:Countries[])=>{
            this.result = posRes;
            this.spinner.hide();
        },(errRes:HttpErrorResponse)=>{
            console.log( errRes );
            this.spinner.hide();
        })
    };
};