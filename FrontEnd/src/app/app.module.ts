import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AgmCoreModule} from '@agm/core';
import { MarkerService } from './services/markerservice';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  
  declarations: [
    AppComponent
  ],
  providers: [MarkerService],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: '<your Google API Key>'
    }),
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
