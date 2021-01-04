import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ThactivitynewsPage } from "./../thactivitynews/thactivitynews";
import { HttpClient } from "@angular/common/http";

@IonicPage()
@Component({
  selector: "page-updateactivity",
  templateUrl: "updateactivity.html",
})
export class UpdateactivityPage {
  any = {};
  activityid: number;
  activityhead: string;
  activitydescription: string;
  activitydate: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
  ) {
    this.activityid = this.navParams.get("activityid");
    this.activityhead = this.navParams.get("activityhead");
    this.activitydescription = this.navParams.get("activitydescription");
    this.activitydate = this.navParams.get("activitydate");

    if (this.activityid != null) {
      this.activityid = this.activityid;
    }
    if (this.activityhead != null) {
      this.activityhead = this.activityhead;
    }
    if (this.activitydescription != null) {
      this.activitydescription = this.activitydescription;
    }

    if (this.activitydate != null) {
      this.activitydate = this.activitydate;
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad UpdatenewsPage");
  }
  //////////////////
  Update(activityid) {
    let postdataset = new FormData();

    /* postdataset.append("id", this.id.toString()); */
    postdataset.append("activityhead", this.activityhead);
    postdataset.append("activitydescription", this.activitydescription);
    postdataset.append("activitydate", this.activitydate);

    let url =
      "http://localhost/Wkapp2/update_activity.php?activityid=" + activityid;

    this.http.post(url, postdataset).subscribe((data: any) => {
      console.log(postdataset);

      alert("แก้ไขเรียบร้อย");

      this.navCtrl.push(ThactivitynewsPage);
      // console.log(data); */
    });
  }
}
