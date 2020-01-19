import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProfilesComponent } from './profiles.component';
import { Profiles } from './profiles';
import { LikesComponent } from './likesComponent';

import { GenderChange } from './gender.component';

import { DataPassingA } from './data.passing.A.component';
import { DataPassingB } from './data.passing.B.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilesComponent,
    LikesComponent,
    GenderChange,
    DataPassingA,
    DataPassingB,
  ],
  imports: [
    BrowserModule
  ],
  providers: [Profiles],
  bootstrap: [AppComponent]
})
export class AppModule { }
