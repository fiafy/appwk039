import { UpdateinfoschoolPage } from "./../updateinfoschool/updateinfoschool";
import { AddinfoschoolPage } from "./../addinfoschool/addinfoschool";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
} from "ionic-angular";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@IonicPage()
@Component({
  selector: "page-infoschool",
  templateUrl: "infoschool.html",
})
export class InfoschoolPage {
  rowsInfo = [];
  data: Observable<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    public alertCtrl: AlertController
  ) {
    this.LoadInfo();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad InfoschoolPage");
  }
  Add() {
    this.navCtrl.push(AddinfoschoolPage);
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
  
  deletedata(inforid: number) {
    var url = "http://localhost/wkapp2/deletedata_info.php?inforid=" + inforid;

    this.data = this.http.get(url);

    this.data.subscribe((data) => {
      alert("ลบข้อมูลเรียบร้อย");
      this.LoadInfo();
    });
  }

  
  Delete(inforid: number) {
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
            this.deletedata(inforid);
          },
        },
      ],
    });
    alert1.present();
  }

  //อัปเดพ//
  btupdate(inforid: number, infordescription: string) {
    this.navCtrl.push(UpdateinfoschoolPage, {
      inforid: inforid,
      infordescription: infordescription,
    });
  }
} //end
