import { SelectgradePage } from "./../selectgrade/selectgrade";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

import { HttpClient } from "@angular/common/http";
import { Storage } from "@ionic/storage";
import { Observable } from "rxjs";

@IonicPage()
@Component({
  selector: "page-gradetwo",
  templateUrl: "gradetwo.html",
})
export class GradetwoPage {
  student2: any;
  subject2: any;
  subject12 = [];
  id = [];
  teacher_id = [];

  grade = [];
  classroom = [];

  couse_id = [];
  /* grade: any; */
  class: any;
  data: Observable<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    private storage: Storage
  ) {
    this.loadsubject2();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad GradetwoPage");
  }

  loadsubject2() {
    this.storage.get("id").then((val) => {
      let url = "http://localhost/wkapp2/select_sub2.php?teacher_id=" + val;

      this.http.get(url).subscribe(
        (data: any) => {
          this.subject2 = data.subject2;
          console.log(this.subject2);
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  show(e) {
    // console.log(e);
    this.subject2.forEach((element, index) => {
      e.forEach((ele) => {
        if (ele == element.couse_id) {
          this.couse_id.push(element.couse_id);
        }
      });
    });

    console.log(this.couse_id);
    /* this.loadGrade(); */
  }
  search(grade, classroom) {
    // console.log(term);

    let url =
      "http://localhost/wkapp2/get_sub15.php?grade=" +
      grade +
      "&classroom=" +
      classroom;

    this.http.get(url).subscribe(
      (data: any) => {
        this.student2 = data.student2;

        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  Save(student_id, point) {
    this.storage.get("id").then((val) => {
      // ไว้สำหรับเพิ่มข้อมูลเข้า Database

      let jsonData = {
        student_id: student_id,
        course_id: this.couse_id,
        point: point,
        teacher_id: val,
      }; //สร้าง obj

      console.log(jsonData);
      // let url =
      //   "http://localhost/Wkapp2/add_grade.php?student_id="+student_id & "course_id="+this.couse_id;

      let url =
        "http://localhost/wkapp2/add_gradetwo.php?student_id=" +
        student_id +
        "&couse_id=" +
        this.couse_id +
        "&point=" +
        point +
        "&teacher_id=" +
        val;

      //ให้ไป post ที่  url
      this.http.post(url, jsonData).subscribe((data: any) => {
        alert("บันทึกประกาศเรียบร้อย");
        this.navCtrl.push(SelectgradePage);
        // console.log(data);
      });

      //method post รับค่ามา 2 ค่า คือ url เว็บที่ต้องการโพสไป , obj
      //subscribe ใส่  arrow  function ใส่ค่าเป็น data : any ข้อมูลอะไรก็ได้
    });
  }
}
