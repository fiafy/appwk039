import { SelectgradePage } from './../selectgrade/selectgrade';
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
} from "ionic-angular";
/* import { Storage } from "@ionic/storage"; */
import { HttpClient } from "@angular/common/http";
import { UpdateGradePage } from "../update-grade/update-grade";
import { Observable } from "rxjs";
@IonicPage()
@Component({
  selector: "page-viewgrade",
  templateUrl: "viewgrade.html",
})
export class ViewgradePage {
  [x: string]: any;
  item = { overview: "" };
  student1: any;
  Grade = [];
  term: any;
  subject: any;
  student_id: any;
  course_id: any;

  data: Observable<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    /* private storage: Storage, */
    public http: HttpClient,
    public alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ViewgradePage");
    this.item = this.navParams.data;
    console.log(this.item);
  }

  search(term, grade, classroom) {
    console.log(term);

    let url =
      "http://localhost/wkapp2/load_student12.php?course_id=" +
      this.item +
      "&grade=" +
      grade +
      "&classroom=" +
      classroom +
      "&term=" +
      term;

    this.http.get(url).subscribe(
      (data: any) => {
        this.student1 = data.student1;
        console.log(this.student1);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  Delete(course_id: number, student_id: number) {
    console.log("couse_id", course_id);

    console.log("student_id", student_id);

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
            this.deletedata(course_id, student_id);
          },
        },
      ],
    });
    alert1.present();
  }

  deletedata(course_id, student_id) {
    var url =
      "http://localhost/wkapp2/deletedata_grade.php?course_id=" +
      course_id +
      "&student_id=" +
      student_id;

    this.data = this.http.get(url);

    this.data.subscribe((data) => {
      alert("ลบข้อมูลเรียบร้อย");
      this.navCtrl.push(SelectgradePage);
      console.log(data);
    });
  }

  //อัปเดพ//
  btupdate(
    student_id: number,

    surname: string,
    lastname: string,
    point: any
  ) {
    this.navCtrl.push(UpdateGradePage, {
      student_id: student_id,
      course_id: this.item,

      surname: surname,
      lastname: lastname,
      point: point,
    });
  }
} //end
