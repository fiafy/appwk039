import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentinformationPage } from './studentinformation';

@NgModule({
  declarations: [
    StudentinformationPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentinformationPage),
  ],
})
export class StudentinformationPageModule {}
