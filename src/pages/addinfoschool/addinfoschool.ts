import { InfoschoolPage } from "./../infoschool/infoschool";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpClient } from "@angular/common/http";

@IonicPage()
@Component({
  selector: "page-addinfoschool",
  templateUrl: "addinfoschool.html",
})
export class AddinfoschoolPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddinfoschoolPage");
  }

  AddInfo(infordescription) {
    // ไว้สำหรับเพิ่มข้อมูลเข้า Database
    let jsonData = {
      infordescription: infordescription,
    }; //สร้าง obj
    console.log(jsonData);
    let url = "http://localhost/Wkapp2/add_info.php"; //ให้ไป post ที่  url
    this.http.post(url, jsonData).subscribe((data: any) => {
      alert("บันทึกประกาศเรียบร้อย");
      this.navCtrl.push(InfoschoolPage);
      // console.log(data);
    });

    //method post รับค่ามา 2 ค่า คือ url เว็บที่ต้องการโพสไป , obj
    //subscribe ใส่  arrow  function ใส่ค่าเป็น data : any ข้อมูลอะไรก็ได้
  }
}
