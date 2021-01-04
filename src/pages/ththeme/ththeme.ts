import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpClient } from "@angular/common/http";

@IonicPage()
@Component({
  selector: "page-ththeme",
  templateUrl: "ththeme.html",
})
export class ThthemePage {
  rowsTheme = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
  ) {
    this.LoadTheme();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ThthemePage");
  }
  LoadTheme() {
    let url = "http://localhost/Wkapp2/get_theme.php";
    this.http.get(url).subscribe(
      (data: any) => {
        this.rowsTheme = data.rowsTheme;
        console.log(this.rowsTheme);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
