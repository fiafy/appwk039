import { AboutPage } from "./../about/about";
import { MessagePage } from "./../message/message";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@IonicPage()
@Component({
  selector: "page-contact",
  templateUrl: "contact.html",
})
export class ContactPage {
  rowsInfo = [];
  data: Observable<any>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
  ) {
    this.LoadInfo();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ContactPage");
  }

  LoadInfo() {
    let url = "http://localhost/wkapp2/get_info.php";
    this.http.get(url).subscribe(
      (data: any) => {
        this.rowsInfo = data.rowsInfo;
        console.log(this.rowsInfo);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  massage() {
    this.navCtrl.push(MessagePage);
  }

  About() {
    this.navCtrl.push(AboutPage);
  }
}
