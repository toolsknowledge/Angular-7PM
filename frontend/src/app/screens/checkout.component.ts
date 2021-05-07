import { Component, Input } from "@angular/core";

@Component({
    selector:"checkout",
    templateUrl:"./checkout.component.html"
})
export class checkoutComponent{
    @Input() signin;
    @Input() shipping;
    @Input() payment;
    @Input() order;
};