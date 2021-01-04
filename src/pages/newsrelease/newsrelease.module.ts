import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsreleasePage } from './newsrelease';

@NgModule({
  declarations: [
    NewsreleasePage,
  ],
  imports: [
    IonicPageModule.forChild(NewsreleasePage),
  ],
})
export class NewsreleasePageModule {}
