import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StuschedulePage } from './stuschedule';

@NgModule({
  declarations: [
    StuschedulePage,
  ],
  imports: [
    IonicPageModule.forChild(StuschedulePage),
  ],
})
export class StuschedulePageModule {}
