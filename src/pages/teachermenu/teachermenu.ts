import { SelectgradePage } from "./../selectgrade/selectgrade";
import { ThmonFriPage } from "./../thmon-fri/thmon-fri";
import { GpaPage } from "./../gpa/gpa";

import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Storage } from "@ionic/storage";
import { HomePage } from "../home/home";
import { HttpClient } from "@angular/common/http";

@IonicPage()
@Component({
  selector: "page-teachermenu",
  templateUrl: "teachermenu.html",
})
export class TeachermenuPage {
  rowsName: {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    public http: HttpClient
  ) {
    this.LoadName();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad TeachermenuPage");
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

  Gpa() {
    this.navCtrl.push(GpaPage);
  }

  ThmonFri() {
    this.navCtrl.push(ThmonFriPage);
  }

  Selectgrade() {
    this.navCtrl.push(SelectgradePage);
  }

  logout() {
    this.storage.clear();

    this.navCtrl.setRoot(HomePage);
  }
}
