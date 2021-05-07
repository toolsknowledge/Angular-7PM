import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'childthree',
  templateUrl: './childthree.component.html',
  styles: [
  ]
})
export class ChildthreeComponent implements OnInit {
  var_six:string;
  constructor() { 
    this.var_six = "Child Three !!!";
  }

  ngOnInit(): void {
  }

}
