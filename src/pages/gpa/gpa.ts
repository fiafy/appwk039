import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-gpa",
  templateUrl: "gpa.html",
})
export class GpaPage {
  [x: string]: any;
  credit1: any;
  credit2: any;
  credit3: any;
  credit4: any;
  credit5: any;
  credit6: any;
  credit7: any;
  credit8: any;

  grade1: any;
  grade2: any;
  grade3: any;
  grade4: any;
  grade5: any;
  grade6: any;
  grade7: any;
  grade8: any;

  calculate: any;
  newLocal: any;
  result: any;
  mixcredit: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad GpaPage");
  }
  add(
    credit1: string,
    credit2: string,
    credit3: string,
    credit4: string,
    credit5: string,
    credit6: string,
    credit7: string,
    credit8: string,
    grade1: string,
    grade2: string,
    grade3: string,
    grade4: string,
    grade5: string,
    grade6: string,
    grade7: string,
    grade8: string
  ) {
    this.calculate =
      parseFloat(this.credit1) * parseFloat(this.grade1) +
      parseFloat(this.credit2) * parseFloat(this.grade2) +
      parseFloat(this.credit3) * parseFloat(this.grade3) +
      parseFloat(this.credit4) * parseFloat(this.grade4) +
      parseFloat(this.credit5) * parseFloat(this.grade5) +
      parseFloat(this.credit6) * parseFloat(this.grade6) +
      parseFloat(this.credit7) * parseFloat(this.grade7) +
      parseFloat(this.credit8) * parseFloat(this.grade8);
    this.mixcredit =
      parseFloat(this.credit1) +
      parseFloat(this.credit2) +
      parseFloat(this.credit3) +
      parseFloat(this.credit4) +
      parseFloat(this.credit5) +
      parseFloat(this.credit6) +
      parseFloat(this.credit7) +
      parseFloat(this.credit8);

    this.result = parseFloat(this.calculate) / parseFloat(this.mixcredit);
    this.newLocal = this.result.toFixed(2);

    console.log(this.newLocal);
  }

  reset() {
    this.newLocal = null;
    this.credit1 = null;
    this.credit2 = null;
    this.credit3 = null;
    this.credit4 = null;
    this.credit5 = null;
    this.credit6 = null;
    this.credit7 = null;
    this.credit8 = null;
    this.grade1 = null;
    this.grade2 = null;
    this.grade3 = null;
    this.grade4 = null;
    this.grade5 = null;
    this.grade6 = null;
    this.grade7 = null;
    this.grade8 = null;

    
  }
} //end
