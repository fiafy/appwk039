import { AdminmenuPage } from './../adminmenu/adminmenu';

import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

@IonicPage()
@Component({
  selector: "page-addplan",
  templateUrl: "addplan.html",
})
export class AddplanPage {
  teacher12 = [];
  data: Observable<any>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    
  ) {
    this.loadteacher12();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddplanPage");
  }

  loadteacher12() {
    let url = "http://localhost/wkapp2/get_teacher.php?";

    this.http.get(url).subscribe(
      (data: any) => {
        this.teacher12 = data.teacher12;
        console.log(this.teacher12);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  Saveplan(grade, term, course_code, course, credit, teacher_id) {
    
    // ไว้สำหรับเพิ่มข้อมูลเข้า Database
    let jsonData = {
      grade: grade,
      term: term,
      course_code: course_code,
      course: course,
      credit: credit,
      teacher_id: teacher_id,
    }; //สร้าง obj
    console.log(jsonData);
    let url = "http://localhost/wkapp2/add_plan.php"; //ให้ไป post ที่  url
    this.http.post(url, jsonData).subscribe((data: any) => {
      alert("บันทึกแผนการเรียนเรียบร้อย");
      this.navCtrl.push(AdminmenuPage);
      // console.log(data);
    });
  }
} //end class
