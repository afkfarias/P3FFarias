import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { SharedModule } from '../../shared/shared.module';
import { NavBarRoutingModule } from './nav-bar-routing.module';



@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    NavBarRoutingModule,
    SharedModule
  ],
  exports: [
    NavBarComponent]
})
export class NavBarModule { }
