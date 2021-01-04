import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminmenuPage } from './adminmenu';

@NgModule({
  declarations: [
    AdminmenuPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminmenuPage),
  ],
})
export class AdminmenuPageModule {}
