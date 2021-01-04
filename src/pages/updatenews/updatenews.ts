import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { PublicizePage } from "./../publicize/publicize";
import { HttpClient } from "@angular/common/http";

@IonicPage()
@Component({
  selector: "page-updatenews",
  templateUrl: "updatenews.html",
})
export class UpdatenewsPage {
  any = {};
  news_id: number;
  news_head: string;
  news_description: string;
  news_date: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
  ) {
    this.news_id = this.navParams.get("news_id");
    this.news_head = this.navParams.get("news_head");
    this.news_description = this.navParams.get("news_description");
    this.news_date = this.navParams.get("news_date");

    if (this.news_id != null) {
      this.news_id = this.news_id;
    }
    if (this.news_head != null) {
      this.news_head = this.news_head;
    }
    if (this.news_description != null) {
      this.news_description = this.news_description;
    }
    if (this.news_date != null) {
      this.news_date = this.news_date;
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad UpdatenewsPage");
  }
  //////////////////
  Update(news_id, head_news, description, date) {
    let postdataset = new FormData();

    /* postdataset.append("id", this.id.toString()); */
    postdataset.append("news_head", this.news_head);
    postdataset.append("news_description", this.news_description);
    postdataset.append("news_date", this.news_date);

    let url = "http://localhost/Wkapp2/update_news.php?news_id=" + news_id;

    this.http.post(url, postdataset).subscribe((data: any) => {
      console.log(postdataset);

      alert("แก้ไขเรียบร้อย");

      this.navCtrl.push(PublicizePage);
      // console.log(data); */
    });
  }
}
