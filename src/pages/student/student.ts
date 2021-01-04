import { Storage } from "@ionic/storage";
import { StugpaPage } from "./../stugpa/stugpa";
import { StuschedulePage } from "./../stuschedule/stuschedule";
import { StuthemePage } from "./../stutheme/stutheme";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
} from "ionic-angular";

import { HomePage } from "../home/home";
import { ShowstudyplanonePage } from "./../showstudyplanone/showstudyplanone";
import { StugradePage } from "../stugrade/stugrade";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

@IonicPage()
@Component({
  selector: "page-student",
  templateUrl: "student.html",
})
export class StudentPage {
  rowsName: {};

  data: Observable<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    public http: HttpClient,
    public alertCtrl: AlertController
  ) {
    this.LoadName();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad StudentPage");
    this.CheckStorage();
  }

  CheckStorage() {
    this.storage.get("grade").then((g) => {
      this.storage.get("classroom").then((c) => {});
    });
  }

  LoadName() {
    this.storage.get("id").then((val) => {
      console.log(val);

      let url = "http://localhost/wkapp2/get_login.php?id=" + val;

      this.http.get(url).subscribe(
        (data: any) => {
          this.rowsName = data.rowsName;
          console.log(this.rowsName);
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  Showstudyplanone() {
    this.navCtrl.push(ShowstudyplanonePage);
  }

  Stugrade() {
    this.navCtrl.push(StugradePage);
  }

  Stutheme() {
    this.navCtrl.push(StuthemePage);
  }

  Stuschedule() {
    this.navCtrl.push(StuschedulePage);
  }

  Stugpa() {
    this.navCtrl.push(StugpaPage);
  }

  logout() {
    this.storage.clear();

    this.navCtrl.setRoot(HomePage);
  }
}
