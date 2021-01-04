import { ThcalendarPage } from "./../thcalendar/thcalendar";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpClient } from "@angular/common/http";

@IonicPage()
@Component({
  selector: "page-updatecalendar",
  templateUrl: "updatecalendar.html",
})
export class UpdatecalendarPage {
  any = {};
  calenderid: number;

  calenderhead: string;
  calenderlist: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
  ) {
    this.calenderid = this.navParams.get("calenderid");
    this.calenderhead = this.navParams.get("calenderhead");
    this.calenderlist = this.navParams.get("calenderlist");

    if (this.calenderid != null) {
      this.calenderid = this.calenderid;
    }
    if (this.calenderhead != null) {
      this.calenderhead = this.calenderhead;
    }
    if (this.calenderlist != null) {
      this.calenderlist = this.calenderlist;
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad UpdatecalendarPage");
  }

  //////////////////
  Update(calenderid) {
    let postdataset = new FormData();

    /* postdataset.append("id", this.id.toString()); */
    postdataset.append("calenderhead", this.calenderhead);
    postdataset.append("calenderlist", this.calenderlist);

    let url =
      "http://localhost/Wkapp2/update_calendar.php?calenderid=" + calenderid;

    this.http.post(url, postdataset).subscribe((data: any) => {
      console.log(postdataset);

      alert("แก้ไขเรียบร้อย");

      this.navCtrl.push(ThcalendarPage);
      // console.log(data); */
    });
  }
}
