import { AddcalendarPage } from "./../addcalendar/addcalendar";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
} from "ionic-angular";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UpdatecalendarPage } from "./..//updatecalendar/updatecalendar";

@IonicPage()
@Component({
  selector: "page-thcalendar",
  templateUrl: "thcalendar.html",
})
export class ThcalendarPage {
  rowsCalendar = [];
  data: Observable<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    public alertCtrl: AlertController
  ) {
    this.LoadCalendar();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ThcalendarPage");
  }
  Add() {
    this.navCtrl.push(AddcalendarPage);
  }

  LoadCalendar() {
    let url = "http://localhost/wkapp2/get_calendar.php";
    this.http.get(url).subscribe(
      (data: any) => {
        this.rowsCalendar = data.rowsCalendar;
        console.log(this.rowsCalendar);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deletedata(calenderid: number) {
    var url = "http://localhost/wkapp2/deletedata_calendar.php?calenderid=" + calenderid;

    this.data = this.http.get(url);

    this.data.subscribe((data) => {
      alert("ลบข้อมูลเรียบร้อย");
      this.LoadCalendar();
    });
  }

  Delete(calenderid : number) {
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
            this.deletedata(calenderid);
          },
        },
      ],
    });
    alert1.present();
  }

  //อัปเดพ//
  btupdate(calenderid: number, calenderhead: string, calenderlist: string) {
    this.navCtrl.push(UpdatecalendarPage, {
      calenderid: calenderid,
      calenderhead: calenderhead,
      calenderlist: calenderlist,
    });
  }
}
