import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
} from "ionic-angular";
import { AddpublicizePage } from "../addpublicize/addpublicize";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UpdatenewsPage } from "./../updatenews/updatenews";

@IonicPage()
@Component({
  selector: "page-publicize",
  templateUrl: "publicize.html",
})
export class PublicizePage {
  rowsNews = [];
  data: Observable<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    public alertCtrl: AlertController
  ) {
    this.LoadNews();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PublicizePage");
  }

  Add() {
    this.navCtrl.push(AddpublicizePage);
  }

  LoadNews() {
    let url = "http://localhost/wkapp2/get_News.php";
    this.http.get(url).subscribe(
      (data: any) => {
        this.rowsNews = data.rowsNews;
        console.log(this.rowsNews);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deletedata(news_id: number) {
    var url = "http://localhost/wkapp2/deletedata_news.php?news_id=" + news_id;

    this.data = this.http.get(url);

    this.data.subscribe((data) => {
      alert("ลบข้อมูลเรียบร้อย");
      this.LoadNews();
    });
  }

  Delete(news_id: number) {
    // console.log(id);
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
            this.deletedata(news_id);
          },
        },
      ],
    });
    alert1.present();
  }

  //อัปเดพ//
  btupdate(
    news_id: number,
    news_head: string,
    news_description: string,
    news_date: string
  ) {
    this.navCtrl.push(UpdatenewsPage, {
      news_id: news_id,
      news_head: news_head,
      news_description: news_description,
      news_date: news_date,
    });
  }
} //
