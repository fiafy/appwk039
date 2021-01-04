import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { StudentPage } from "../student/student";
import { HttpClient } from "@angular/common/http";

@IonicPage()
@Component({
  selector: "page-stutheme",
  templateUrl: "stutheme.html",
})
export class StuthemePage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad StuthemePage");
  }
  Send(head_theme, message) {
    // ไว้สำหรับเพิ่มข้อมูลเข้า Database
    let jsonData = {
      head_theme: head_theme,
      message: message,
    }; //สร้าง obj
    console.log(jsonData);
    let url = "http://localhost/Wkapp2/add_theme.php"; //ให้ไป post ที่  url
    this.http.post(url, jsonData).subscribe((data: any) => {
      alert("ส่งข้อความเรียบร้อย");
      this.navCtrl.push(StudentPage);
      // console.log(data);
    });

    //method post รับค่ามา 2 ค่า คือ url เว็บที่ต้องการโพสไป , obj
    //subscribe ใส่  arrow  function ใส่ค่าเป็น data : any ข้อมูลอะไรก็ได้
  }
}
