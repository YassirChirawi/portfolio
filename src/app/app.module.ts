import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { CompetencesComponent } from './competences/competences.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { CentresComponent } from './centres/centres.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    CompetencesComponent,
    ExperiencesComponent,
    CentresComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
