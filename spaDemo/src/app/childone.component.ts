import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'childone',
  templateUrl: './childone.component.html',
  styles: [
  ]
})
export class ChildoneComponent implements OnInit {

  var_four:string;

  constructor() { 
    this.var_four = "Child One !!!";
  }

  ngOnInit(): void {
  }

}
