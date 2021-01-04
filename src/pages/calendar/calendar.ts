import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpClient } from "@angular/common/http";

@IonicPage()
@Component({
  selector: "page-calendar",
  templateUrl: "calendar.html",
})
export class CalendarPage {
  rowsCalendar = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
  ) {
    this.LoadCalendar();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CalendarPage");
  }

  
  LoadCalendar() {
    let url = "http://localhost/wkapp2/get_calendar.php";
    this.http.get(url).subscribe(
      (data: any) => {
        this.rowsCalendar = data.rowsCalendar;
        console.log(this.rowsCalendar);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
