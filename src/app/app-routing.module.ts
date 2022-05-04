import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { CentresComponent } from './centres/centres.component';
import { CompetencesComponent } from './competences/competences.component';
import { HomeComponent } from './home/home.component';
import {ExperiencesComponent} from './experiences/experiences.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes =[
{path : '', redirectTo : '/home',pathMatch:"full"},
{path : 'aboutme', component : AboutMeComponent} ,
{path : 'home',component : HomeComponent},
{path:'centres',component:CentresComponent},{path: 'knowledges',component:CompetencesComponent},
{path:'experiences',component:ExperiencesComponent},
{path:'contact', component:ContactComponent},


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
