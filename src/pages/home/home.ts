import { AdminmenuPage } from "./../adminmenu/adminmenu";
import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { Storage } from "@ionic/storage";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { StudentPage } from "./../student/student";

import { TeachermenuPage } from "./../teachermenu/teachermenu";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {
  /* logindata: any = {}; */

  username: string;
  password: string;

  data: Observable<any>;

  constructor(
    public navCtrl: NavController,
    private storage: Storage,
    public http: HttpClient
  ) {}

  login(username, password) {
    var url =
      "http://localhost/wkapp2/login.php?username=" +
      username +
      "&password=" +
      password;

    this.data = this.http.get(url, username);
    this.data = this.http.get(url, password);

    this.data.subscribe((data) => {
      this.storage.set("id", data.id);
      this.storage.set("grade", data.grade);
      this.storage.set("classroom", data.classroom);

      this.storage.get("id").then((val) => {});

      console.log("id", data.id);
      console.log("grade", data.grade);
      console.log("classroom", data.classroom);

      if (data.id != null && data.type == "teacher") {
        this.navCtrl.setRoot(TeachermenuPage);
      } else if (data.id != null && data.type == "student") {
        this.navCtrl.setRoot(StudentPage);
      } else if (data.id != null && data.type == "admin") {
        this.navCtrl.setRoot(AdminmenuPage);
      } else {
        alert("เกิดข้อผิดพลาดในการเข้าสู่ระบบ");
      }
    });
  }
} //end class
