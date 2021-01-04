import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpClient } from "@angular/common/http";
import { Storage } from "@ionic/storage";

@IonicPage()
@Component({
  selector: "page-stugrade",
  templateUrl: "stugrade.html",
})
export class StugradePage {
  Grade = [];
  Grademix: any;
  Grademix2: any;
  Gradetwo = [];

  mixcredit: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    private storage: Storage
  ) {
    this.LoadGrade();
    this.LoadGradetwo();
    this.MixGrade();
    this.MixGrade2();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad StugradePage");
  }

  LoadGrade() {
    this.storage.get("id").then((val) => {
      let url = "http://localhost/wkapp2/get_grade.php?student_id=" + val;

      this.http.get(url).subscribe(
        (data: any) => {
          this.Grade = data.Grade;
          console.log(this.Grade);
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  MixGrade() {
    this.storage.get("id").then((val) => {
      let url = "http://localhost/wkapp2/mix_grade.php?student_id=" + val;

      this.http.get(url).subscribe(
        (data: any) => {
          this.Grademix = data.Grademix;

          this.Grademix = parseFloat(this.Grademix);
          this.Grademix = this.Grademix.toFixed(2);
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }
  LoadGradetwo() {
    this.storage.get("id").then((val) => {
      console.log(val);

      let url = "http://localhost/wkapp2/get_gradetwo.php?student_id=" + val;

      this.http.get(url).subscribe(
        (data: any) => {
          this.Gradetwo = data.Gradetwo;
          console.log(this.Gradetwo);
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }
  MixGrade2() {
    this.storage.get("id").then((val) => {
      let url = "http://localhost/wkapp2/mix_grade2.php?student_id=" + val;

      this.http.get(url).subscribe(
        (data: any) => {
          this.Grademix2 = data.Grademix2;

          this.Grademix2 = parseFloat(this.Grademix2);
          this.Grademix2 = this.Grademix2.toFixed(2);
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }
}
