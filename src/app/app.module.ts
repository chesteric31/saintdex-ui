import {isDevMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule} from '@angular/service-worker';
import {HeaderComponent} from "./header/header.component";
import {SearchComponent} from "./search/search.component";
import {ListComponent} from "./list/list.component";
import {HttpClientModule} from "@angular/common/http";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    HeaderComponent,
    SearchComponent,
    ListComponent,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
