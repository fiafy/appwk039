import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StugradePage } from './stugrade';

@NgModule({
  declarations: [
    StugradePage,
  ],
  imports: [
    IonicPageModule.forChild(StugradePage),
  ],
})
export class StugradePageModule {}
