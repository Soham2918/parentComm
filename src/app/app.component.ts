import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sahoProj';


  Cdata:any

  getData(value:any){
    this.Cdata=value;
  }

}
