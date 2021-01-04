import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpClient } from "@angular/common/http";
import { Storage } from "@ionic/storage";

@IonicPage()
@Component({
  selector: "page-showstudyplanone",
  templateUrl: "showstudyplanone.html",
})
export class ShowstudyplanonePage {
  rowsStudyplan = [];
  rowsStudyplanone = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    private storage: Storage
  ) {
    this.LoadStudyplan();
    this.LoadStudyplanone();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ShowstudyplanonePage");
  }

  LoadStudyplan() {
    this.storage.get("id").then((val) => {
      console.log(val);

      let url = "http://localhost/wkapp2/get_studyplan.php?id=" + val;

      this.http.get(url).subscribe(
        (data: any) => {
          this.rowsStudyplan = data.rowsStudyplan;
          console.log(this.rowsStudyplan);
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  LoadStudyplanone() {
    this.storage.get("id").then((val) => {
      console.log(val);
      let url = "http://localhost/wkapp2/get_studyplanone.php?id=" + val;
      this.http.get(url).subscribe(
        (data: any) => {
          this.rowsStudyplanone = data.rowsStudyplanone;
          console.log(this.rowsStudyplanone);
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }
} //end class
