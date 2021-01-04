import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThcalendarPage } from './thcalendar';

@NgModule({
  declarations: [
    ThcalendarPage,
  ],
  imports: [
    IonicPageModule.forChild(ThcalendarPage),
  ],
})
export class ThcalendarPageModule {}
