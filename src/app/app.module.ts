import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TapUtilsModule } from 'tap-utils';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogService } from 'tap-utils';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TapUtilsModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
