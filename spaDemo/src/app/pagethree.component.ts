import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pagethree',
  templateUrl: './pagethree.component.html',
  styles: [
  ]
})
export class PagethreeComponent implements OnInit {
  var_three:string;
  constructor(private routing:ActivatedRoute) { 
    this.var_three = this.routing.snapshot.params["p_id"]+" "+this.routing.snapshot.params["p_name"]+" "+this.routing.snapshot.params["p_cost"]
  }

  ngOnInit(): void {
  }

}
