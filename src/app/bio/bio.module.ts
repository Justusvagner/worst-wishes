import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BioComponent } from './bio.component';
import { BioRoutingModule } from './bio-routing.module';
import { ParallaxComponent } from './parallax/parallax.component';

@NgModule({
  declarations: [
    BioComponent,
    ParallaxComponent,
  ],
  imports: [
    CommonModule,
    BioRoutingModule,
  ],
  exports: [
    BioComponent
  ]
})
export class BioModule { }
