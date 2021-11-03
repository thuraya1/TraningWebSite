import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { CoursCardsComponent } from './home/cours-cards/cours-cards.component';
import { ProfileComponent } from './profile/profile.component';
import { NewcourseComponent } from './newcourse/newcourse.component';


@NgModule({
  declarations: [
    HomeComponent,
    CoursCardsComponent,
    ProfileComponent,
    NewcourseComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
  ]
})
export class ClientModule { }
