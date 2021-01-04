import { ThactivitynewsPage } from "./../thactivitynews/thactivitynews";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpClient } from "@angular/common/http";

@IonicPage()
@Component({
  selector: "page-addactivitynews",
  templateUrl: "addactivitynews.html",
})
export class AddactivitynewsPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddactivitynewsPage");
  }
  Addactivity(activityhead,activitydescription,activitydate) {
    // ไว้สำหรับเพิ่มข้อมูลเข้า Database
    let jsonData = {
      activityhead: activityhead,
      activitydescription: activitydescription,
      activitydate: activitydate,
    }; //สร้าง obj
    console.log(jsonData);
    let url = "http://localhost/wkapp2/add_activity.php"; //ให้ไป post ที่  url
    this.http.post(url, jsonData).subscribe((data: any) => {
      alert("บันทึกประกาศเรียบร้อย");
      this.navCtrl.push(ThactivitynewsPage);
      // console.log(data);
    });
  }
}
