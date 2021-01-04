import { AdminmenuPage } from "./../adminmenu/adminmenu";

import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpClient } from "@angular/common/http";

@IonicPage()
@Component({
  selector: "page-studentinformation",
  templateUrl: "studentinformation.html",
})
export class StudentinformationPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad StudentinformationPage");
  }
  Saveinformation(
    grade,
    classroom,
    surname,
    lastname,
    username,
    password,
    type
  ) {
    // ไว้สำหรับเพิ่มข้อมูลเข้า Database
    let jsonData = {
      grade: grade,
      classroom: classroom,
      surname: surname,
      lastname: lastname,
      username: username,
      password: password,
      type: type,
    }; //สร้าง obj
    console.log(jsonData);
    let url = "http://localhost/wkapp2/add_information.php"; //ให้ไป post ที่  url
    this.http.post(url, jsonData).subscribe((data: any) => {
      alert("บันทึกข้อมูลเรียนเรียบร้อย");
      this.navCtrl.push(AdminmenuPage);
      // console.log(data);
    });
  }
} //end class
