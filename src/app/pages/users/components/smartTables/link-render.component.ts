import { Component, Input, OnInit } from '@angular/core';
//import { ViewCell } from 'ng2-smart-table';


@Component({
  template: `
    <p>Custom HTML</p><button (click)="example()">Click me</button>
  `,
})
export class LinkRenderComponent implements OnInit {

  public renderValue;

  @Input() value;

  constructor() {  }

  ngOnInit() {
    this.renderValue = this.value;
  }

  example() {
    alert(this.renderValue);
  }


}