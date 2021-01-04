import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { InformationPage } from "../information/information";
import { InfoschoolPage } from "../infoschool/infoschool";
import { PublicizePage } from "../publicize/publicize";
import { StudentinformationPage } from "../studentinformation/studentinformation";
import { ThactivitynewsPage } from "../thactivitynews/thactivitynews";
import { ThappPage } from "../thapp/thapp";
import { ThcalendarPage } from "../thcalendar/thcalendar";
import { ThthemePage } from "../ththeme/ththeme";
import { Storage } from "@ionic/storage";
import { HomePage } from "../home/home";
import { AddplanPage } from "../addplan/addplan";


@IonicPage()
@Component({
  selector: "page-adminmenu",
  templateUrl: "adminmenu.html",
})
export class AdminmenuPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad AdminmenuPage");
  }

  Information() {
    this.navCtrl.push(InformationPage);
  }

  Studentinformation() {
    this.navCtrl.push(StudentinformationPage);
  }

  Publicize() {
    this.navCtrl.push(PublicizePage);
  }

  Thactivitynews() {
    this.navCtrl.push(ThactivitynewsPage);
  }

  Thcalendar() {
    this.navCtrl.push(ThcalendarPage);
  }

  Infoschool() {
    this.navCtrl.push(InfoschoolPage);
  }

  Ththeme() {
    this.navCtrl.push(ThthemePage);
  }

  app() {
    this.navCtrl.push(ThappPage);
  }

  Addplan() {
    this.navCtrl.push(AddplanPage);
  }

  logout() {
    this.storage.clear();

    this.navCtrl.setRoot(HomePage);
  }
}
