import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'childtwo',
  templateUrl: './childtwo.component.html',
  styles: [
  ]
})
export class ChildtwoComponent implements OnInit {
  var_five:any;
  constructor(private routing:ActivatedRoute) {
    this.var_five = this.routing.snapshot.params["p_id"]+"  "+this.routing.snapshot.params["p_name"]+"  "+this.routing.snapshot.params["p_cost"];
   }

  ngOnInit(): void {
  }

}
