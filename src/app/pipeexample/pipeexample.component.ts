import { Component } from '@angular/core';

@Component({
  selector: 'app-pipeexample',
  templateUrl: './pipeexample.component.html',
  styleUrls: ['./pipeexample.component.css']
})
export class PipeexampleComponent {

  employee:any=[
    {name:'Parag',code:91, no:123123123, gender:'male'},
    {name:'Anjalee',code:1, no:123123123, gender:'female'},
    {name:'Sonu', code:61,no:123123123, gender:'male'},
    {name:'Ookla', code:65,no:123123123, gender:'Female'},
    {name:'Milu', code:'',no:123123123, gender:'Female'},



  ];

}
