import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pageone',
  templateUrl: './pageone.component.html',
  styles: [
  ]
})
export class PageoneComponent implements OnInit {

  var_one:string;

  constructor(private routing:ActivatedRoute) {
    this.var_one = this.routing.snapshot.params["p_id"]+"...."+this.routing.snapshot.params["p_name"]+"...."+this.routing.snapshot.params["p_cost"]
   }

  ngOnInit(): void {
  }

}
