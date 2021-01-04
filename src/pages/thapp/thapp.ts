import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpClient } from "@angular/common/http";

@IonicPage()
@Component({
  selector: "page-thapp",
  templateUrl: "thapp.html",
})
export class ThappPage {
  rowsReport: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
  ) {
    this.LoadReport();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ThappPage");
  }
  LoadReport() {
    let url = "http://localhost/Wkapp2/get_report.php";
    this.http.get(url).subscribe(
      (data: any) => {
        this.rowsReport = data.rowsReport;
        console.log(this.rowsReport);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
