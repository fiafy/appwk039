import { ThmonFriPage } from "./../thmon-fri/thmon-fri";

import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

@IonicPage()
@Component({
  selector: "page-updateschedule",
  templateUrl: "updateschedule.html",
})
export class UpdateschedulePage {
  any = {};
  data: Observable<any>;
  day: string;
  time: string;
  id: number;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
  ) {
    this.id = this.navParams.get("id");
    this.day = this.navParams.get("day");
    this.time = this.navParams.get("time");

    if (this.id != null) {
      this.id = this.id;
    }
    if (this.day != null) {
      this.day = this.day;
    }
    if (this.time != null) {
      this.time = this.time;
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad UpdateschedulePage");
  }

  Update() {
    let postdataset = new FormData();

    //postdataset.append("id", this.id.toString()); //

    postdataset.append("day", this.day);
    postdataset.append("time", this.time);

    let url = "http://localhost/wkapp2/update_monday.php?id=" + this.id;

    this.http.post(url, postdataset).subscribe((data: any) => {
      console.log(postdataset);

      alert("แก้ไขเรียบร้อย");

      this.navCtrl.push(ThmonFriPage);
      // console.log(data); */
    });
  }
  /*  Update() {
    let postdataset = new FormData();

    postdataset.append("day", this.day);
    postdataset.append("time", this.time);
    console.log(this.day);
    console.log(this.time);
  } */
} //ent
