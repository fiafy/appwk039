import { UpdateactivityPage } from "./../updateactivity/updateactivity";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
} from "ionic-angular";
import { AddactivitynewsPage } from "../addactivitynews/addactivitynews";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@IonicPage()
@Component({
  selector: "page-thactivitynews",
  templateUrl: "thactivitynews.html",
})
export class ThactivitynewsPage {
  rowsActivity = [];
  data: Observable<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    public alertCtrl: AlertController
  ) {
    this.LoadActivity();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ThactivitynewsPage");
  }
  Add() {
    this.navCtrl.push(AddactivitynewsPage);
  }
  LoadActivity() {
    let url = "http://localhost/wkapp2/get_activity.php";
    this.http.get(url).subscribe(
      (data: any) => {
        this.rowsActivity = data.rowsActivity;
        console.log(this.rowsActivity);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  deletedata(activityid: number) {
    var url = "http://localhost/wkapp2/deletedata_activity.php?activityid=" + activityid;

    this.data = this.http.get(url);

    this.data.subscribe((data) => {
      alert("ลบข้อมูลเรียบร้อย");
      this.LoadActivity();
    });
  }

  Delete(activityid : number) {
    // console.log(id)//
    let alert1 = this.alertCtrl.create({
      title: "ยืนยันการลบ",
      message: "คุณต้องการลบรายการนี้ หรือไม่?",
      buttons: [
        {
          text: "ยกเลิก",
          role: "cancel",
          handler: () => {},
        },
        {
          text: "ใช่",
          handler: () => {
            this.deletedata(activityid);
          },
        },
      ],
    });
    alert1.present();
  }
  //อัปเดพ//
  btupdate(
    activityid : number,
    activityhead: string,
    activitydescription: string,
    activitydate: string
  ) {
    this.navCtrl.push(UpdateactivityPage, {
      activityid : activityid ,
      activityhead: activityhead,
      activitydescription: activitydescription,
      activitydate: activitydate,
    });
  }
}
