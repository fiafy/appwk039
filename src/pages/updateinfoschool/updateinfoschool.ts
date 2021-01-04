import { InfoschoolPage } from "./../infoschool/infoschool";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpClient } from "@angular/common/http";

@IonicPage()
@Component({
  selector: "page-updateinfoschool",
  templateUrl: "updateinfoschool.html",
})
export class UpdateinfoschoolPage {
  any = {};
  inforid: number;
  infordescription: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
  ) {
    this.inforid = this.navParams.get("inforid");
    this.infordescription = this.navParams.get("infordescription");

    if (this.inforid != null) {
      this.inforid = this.inforid;
    }
    if (this.infordescription != null) {
      this.infordescription = this.infordescription;
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad UpdateinfoschoolPage");
  }

  Update(inforid, description) {
    let postdataset = new FormData();

    /*  postdataset.append("inforid ", this.inforid .toString()); */

    postdataset.append("infordescription", this.infordescription);

    let url = "http://localhost/Wkapp2/update_info.php?inforid=" + inforid;

    this.http.post(url, postdataset).subscribe((data: any) => {
      console.log(postdataset);

      alert("แก้ไขเรียบร้อย");

      this.navCtrl.push(InfoschoolPage);
      // console.log(data); */
    });
  }
}
