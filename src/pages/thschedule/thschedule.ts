import { TeachermenuPage } from "./../teachermenu/teachermenu";

import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpClient } from "@angular/common/http";
import { Storage } from "@ionic/storage";
import { Observable } from "rxjs";

@IonicPage()
@Component({
  selector: "page-thschedule",
  templateUrl: "thschedule.html",
})
export class ThschedulePage {
  grade = [];
  subject12 = [];

  id = [];
  teacher_id = [];

  data: Observable<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    private storage: Storage
  ) {
    // this.loadsubject12();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ThschedulePage");
  }

  search(term) {
    // console.log(term);
    this.storage.get("grade").then((val) => {
      let url =
        "http://localhost/wkapp2/get_subject13.php?term=" +
        term +
        "&grade=" +
        val;

      this.http.get(url).subscribe(
        (data: any) => {
          this.subject12 = data.subject12;

          console.log(this.subject12);
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  show(e) {
    // console.log(e);
    this.subject12.forEach((element, index) => {
      e.forEach((ele) => {
        if (ele == element.id) {
          this.teacher_id.push(element.teacher_id);
          this.grade.push(element.grade);
          this.id.push(element.id);
        }
      });
    });
    console.log(this.teacher_id);
    console.log(this.grade);
    console.log(this.id);
  }

  Saveschedule(term: any, grade: string, classroom: any, day: any, time: any) {
    // ไว้สำหรับเพิ่มข้อมูลเข้า Database
    let jsonData = {
      term: term,
      grade: grade,
      classroom: classroom,
      day: day,
      time: time,
      couse_id: this.id,
      teacher_id: this.teacher_id,
    };

    console.log(jsonData);
    let url = "http://localhost/Wkapp2/add_subject12.php?";

    //ให้ไป post ที่  url
    this.http.post(url, jsonData).subscribe((data: any) => {
      alert("บันทึกตารางเรียนเรียบร้อย");
      this.navCtrl.push(TeachermenuPage);
      console.log(data);
    });

    //method post รับค่ามา 2 ค่า คือ url เว็บที่ต้องการโพสไป , obj
    //subscribe ใส่  arrow  function ใส่ค่าเป็น data : any ข้อมูลอะไรก็ได้
  }
} //end
