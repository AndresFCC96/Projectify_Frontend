import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AnimatedTooltipComponent } from './components/animated-tooltip/animated-tooltip/animated-tooltip.component';


@NgModule({
  declarations: [
    AnimatedTooltipComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
