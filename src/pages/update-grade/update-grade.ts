import { SelectgradePage } from "./../selectgrade/selectgrade";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpClient } from "@angular/common/http";

@IonicPage()
@Component({
  selector: "page-update-grade",
  templateUrl: "update-grade.html",
})
export class UpdateGradePage {
  any = {};
  student_id: number;
  course_id: number;

  surname: string;
  lastname: string;
  point: any;
  item: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
  ) {
    this.student_id = this.navParams.get("student_id");
    this.course_id = this.navParams.get("course_id");

    this.surname = this.navParams.get("surname");
    this.lastname = this.navParams.get("lastname");
    this.point = this.navParams.get("point");

    if (this.student_id != null) {
      this.student_id = this.student_id;
    }
    if (this.course_id != null) {
      this.course_id = this.course_id;
    }

    if (this.surname != null) {
      this.surname = this.surname;
    }
    if (this.lastname != null) {
      this.lastname = this.lastname;
    }

    if (this.point != null) {
      this.point = this.point;
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad UpdateGradePage");
  }

  Update() {
    console.log(this.course_id);
    let postdataset = new FormData();

    /* postdataset.append("id", this.id.toString()); */
    postdataset.append("point", this.point);
    let url =
      "http://localhost/Wkapp2/update_grade.php?student_id=" +
      this.student_id +
      "&course_id=" +
      this.course_id;

    this.http.post(url, postdataset).subscribe((data: any) => {
      console.log(postdataset);

      alert("แก้ไขเรียบร้อย");

      this.navCtrl.push(SelectgradePage);
      /*  console.log(data);  */
    });
  }
  /* Update() {
    let postdataset = new FormData();

    postdataset.append("point", this.point);
    console.log(this.course_id);
    console.log(this.student_id);
    console.log(this.point);
  } */
} //end
