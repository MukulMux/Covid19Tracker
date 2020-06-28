import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { AppRoutingModule } from 'src/app-routing/app-routing.module';
import { CovidserviceService } from './services/covidservice.service';
import { HttpClientModule } from '@angular/common/http';
import { HelplineIndiaComponent } from './helpline-india/helpline-india.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SymptomsComponent,
    PrecautionsComponent,
    HelplineIndiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [CovidserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
