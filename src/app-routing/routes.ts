import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { SymptomsComponent } from 'src/app/symptoms/symptoms.component';
import { PrecautionsComponent } from 'src/app/precautions/precautions.component';
import { HelplineIndiaComponent } from 'src/app/helpline-india/helpline-india.component';

export const routes: Routes = [
    { path: 'home',  component: HomeComponent },
    { path:'symptoms', component:SymptomsComponent },
    { path:'precautions', component:PrecautionsComponent },
    { path:'helpline', component:HelplineIndiaComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
  ];