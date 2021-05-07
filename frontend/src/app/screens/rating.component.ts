//child component to ProductComponent
//@Input()

import { Component, Input } from "@angular/core";

@Component({
    selector:"rating",
    templateUrl:"./rating.component.html"
})

export class Rating{
    @Input() product_rating;
    @Input() product_numReviews;
};