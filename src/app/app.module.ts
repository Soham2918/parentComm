import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { MypipePipe } from './mypipe.pipe';
import { PipeexampleComponent } from './pipeexample/pipeexample.component';
import { CodepipePipe } from './codepipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    MypipePipe,
    PipeexampleComponent,
    CodepipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
