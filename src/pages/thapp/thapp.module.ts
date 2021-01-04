import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThappPage } from './thapp';

@NgModule({
  declarations: [
    ThappPage,
  ],
  imports: [
    IonicPageModule.forChild(ThappPage),
  ],
})
export class ThappPageModule {}
