import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    YouTubePlayerModule,
  ],
  exports: [
    HomeComponent,
  ],
})
export class HomeModule { }
