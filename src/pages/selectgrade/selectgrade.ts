import { GradetwoPage } from "./../gradetwo/gradetwo";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { GradePage } from "./../grade/grade";
import { HttpClient } from "@angular/common/http";
import { Storage } from "@ionic/storage";
import { ViewgradePage } from "../viewgrade/viewgrade";
@IonicPage()
@Component({
  selector: "page-selectgrade",
  templateUrl: "selectgrade.html",
})
export class SelectgradePage {
  subject = [];
  subject2 = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    private storage: Storage
  ) {
    this.LoadSubject();
    this.loadsubject2();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SelectgradePage");
  }

  Grade1() {
    this.navCtrl.push(GradePage);
  }

  Grade2() {
    this.navCtrl.push(GradetwoPage);
  }
  LoadSubject() {
    this.storage.get("id").then((val) => {
      console.log(val);

      let url = "http://localhost/wkapp2/load_sub1.php?teacher_id=" + val;

      this.http.get(url).subscribe(
        (data: any) => {
          this.subject = data.subject;
          console.log(this.subject);
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  loadsubject2() {
    this.storage.get("id").then((val) => {
      console.log(val);

      let url = "http://localhost/wkapp2/load_sub2.php?teacher_id=" + val;

      this.http.get(url).subscribe(
        (data: any) => {
          this.subject2 = data.subject2;
          console.log(this.subject2);
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  View(item) {
    this.navCtrl.push(ViewgradePage, item);
  }
} //end class
