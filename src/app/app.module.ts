import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PurePipeComponent } from './pure-pipe/pure-pipe.component';
import { ImpurePipeComponent } from './impure-pipe/impure-pipe.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { SayHelloPipe, RandomNumberPipe } from './demo-pipes.pipe';
import { NoPipeComponent } from './no-pipe/no-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PurePipeComponent,
    ImpurePipeComponent,
    SayHelloPipe,
    RandomNumberPipe,
    NoPipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
