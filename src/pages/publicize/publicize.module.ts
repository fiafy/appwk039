import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublicizePage } from './publicize';

@NgModule({
  declarations: [
    PublicizePage,
  ],
  imports: [
    IonicPageModule.forChild(PublicizePage),
  ],
})
export class PublicizePageModule {}
