import { ThcalendarPage } from "./../thcalendar/thcalendar";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpClient } from "@angular/common/http";

@IonicPage()
@Component({
  selector: "page-addcalendar",
  templateUrl: "addcalendar.html",
})
export class AddcalendarPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddcalendarPage");
  }
  AddCalendar(calenderhead,calenderlist) {
    // ไว้สำหรับเพิ่มข้อมูลเข้า Database
    let jsonData = {
      calenderhead: calenderhead,
      calenderlist: calenderlist,
    }; //สร้าง obj
    console.log(jsonData);
    let url = "http://localhost/Wkapp2/add_calendar.php"; //ให้ไป post ที่  url
    this.http.post(url, jsonData).subscribe((data: any) => {
      alert("บันทึกประกาศเรียบร้อย");
      this.navCtrl.push(ThcalendarPage);
      // console.log(data);
    });

    //method post รับค่ามา 2 ค่า คือ url เว็บที่ต้องการโพสไป , obj
    //subscribe ใส่  arrow  function ใส่ค่าเป็น data : any ข้อมูลอะไรก็ได้
  }
}
