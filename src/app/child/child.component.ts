import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  inputs:['Pdata'],
  outputs:['Cemittter']

})
export class ChildComponent {
  Pdata:any;

  Cemittter=new EventEmitter();

  onchange(value:any){
    console.log(value);
    this.Cemittter.emit(value)
  }

}
