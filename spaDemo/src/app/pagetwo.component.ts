import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pagetwo',
  templateUrl: './pagetwo.component.html',
  styles: [
  ]
})
export class PagetwoComponent implements OnInit {
  var_two:string;
  constructor() {
    this.var_two = "Page Two !!!";
   }

  ngOnInit(): void {
  }

}
