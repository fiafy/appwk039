import { CalendarPage } from "./../calendar/calendar";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { NewsreleasePage } from "../newsrelease/newsrelease";
import { ActivitynewsPage } from "./../activitynews/activitynews";


@IonicPage()
@Component({
  selector: "page-index",
  templateUrl: "index.html",
})
export class IndexPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad IndexPage");
  }

  Newsrelease() {
    this.navCtrl.push(NewsreleasePage);
  }

  Activitynews() {
    this.navCtrl.push(ActivitynewsPage);
  }
  Calendar() {
    this.navCtrl.push(CalendarPage);
  }
}
