import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpClient } from "@angular/common/http";
import { Storage } from "@ionic/storage";
import { Observable } from "rxjs";

@IonicPage()
@Component({
  selector: "page-stuschedule",
  templateUrl: "stuschedule.html",
})
export class StuschedulePage {
  rowsMonday = [];
  rowsTuesday = [];
  classroom = [];
  rowsWednesday = [];
  rowsThursday = [];
  rowsFriday = [];

  rowsMonday2 = [];
  rowsTuesday21 = [];
  classroom2 = [];
  rowsWednesday2 = [];
  rowsThursday2 = [];
  rowsFriday2 = [];

  data: Observable<any>;
  grade: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    private storage: Storage
  ) {
    this.LoadMonday();
    this.LoadTuesday();
    this.LoadWednesday();
    this.LoadThursday();
    this.LoadFriday();

    this.LoadMonday2();
    this.LoadTuesday21();
    this.LoadWednesday2();
    this.LoadThursday2();
    this.LoadFriday2();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad StuschedulePage");
  }

  LoadMonday() {
    this.storage.get("grade").then((g) => {
      this.storage.get("classroom").then((c) => {
        let url =
          "http://localhost/wkapp2/get_monday.php?grade=" +
          g +
          "&classroom=" +
          c;

        this.http.get(url).subscribe(
          (data: any) => {
            this.rowsMonday = data.rowsMonday;
            console.log(this.rowsMonday);
          },
          (error) => {
            console.log(error);
          }
        );
      });
    });
  }
  LoadTuesday() {
    this.storage.get("grade").then((g) => {
      this.storage.get("classroom").then((c) => {
        let url =
          "http://localhost/wkapp2/get_tuesday.php?grade=" +
          g +
          "&classroom=" +
          c;

        this.http.get(url).subscribe(
          (data: any) => {
            this.rowsTuesday = data.rowsTuesday;
            console.log(this.rowsTuesday);
          },
          (error) => {
            console.log(error);
          }
        );
      });
    });
  }
  LoadWednesday() {
    this.storage.get("grade").then((g) => {
      this.storage.get("classroom").then((c) => {
        let url =
          "http://localhost/wkapp2/get_wednesday.php?grade=" +
          g +
          "&classroom=" +
          c;

        this.http.get(url).subscribe(
          (data: any) => {
            this.rowsWednesday = data.rowsWednesday;
            console.log(this.rowsWednesday);
          },
          (error) => {
            console.log(error);
          }
        );
      });
    });
  }

  LoadThursday() {
    this.storage.get("grade").then((g) => {
      this.storage.get("classroom").then((c) => {
        let url =
          "http://localhost/wkapp2/get_thursday.php?grade=" +
          g +
          "&classroom=" +
          c;

        this.http.get(url).subscribe(
          (data: any) => {
            this.rowsThursday = data.rowsThursday;
            console.log(this.rowsThursday);
          },
          (error) => {
            console.log(error);
          }
        );
      });
    });
  }

  LoadFriday() {
    this.storage.get("grade").then((g) => {
      this.storage.get("classroom").then((c) => {
        let url =
          "http://localhost/wkapp2/get_friday.php?grade=" +
          g +
          "&classroom=" +
          c;

        this.http.get(url).subscribe(
          (data: any) => {
            this.rowsFriday = data.rowsFriday;
            console.log(this.rowsFriday);
          },
          (error) => {
            console.log(error);
          }
        );
      });
    });
  }

  /*              2/63                      */

  LoadMonday2() {
    this.storage.get("grade").then((g) => {
      this.storage.get("classroom").then((c) => {
        let url =
          "http://localhost/wkapp2/get_monday2.php?grade=" +
          g +
          "&classroom=" +
          c;

        this.http.get(url).subscribe(
          (data: any) => {
            this.rowsMonday2 = data.rowsMonday2;
            console.log(this.rowsMonday2);
          },
          (error) => {
            console.log(error);
          }
        );
      });
    });
  }

  LoadTuesday21() {
    this.storage.get("grade").then((g) => {
      this.storage.get("classroom").then((c) => {
        let url =
          "http://localhost/wkapp2/get_tuesday21.php?grade=" +
          g +
          "&classroom=" +
          c;

        this.http.get(url).subscribe(
          (data: any) => {
            this.rowsTuesday21 = data.rowsTuesday21;
            console.log(this.rowsTuesday21);
          },
          (error) => {
            console.log(error);
          }
        );
      });
    });
  }
  LoadWednesday2() {
    this.storage.get("grade").then((g) => {
      this.storage.get("classroom").then((c) => {
        let url =
          "http://localhost/wkapp2/get_wednesday2.php?grade=" +
          g +
          "&classroom=" +
          c;

        this.http.get(url).subscribe(
          (data: any) => {
            this.rowsWednesday2 = data.rowsWednesday2;
            console.log(this.rowsWednesday2);
          },
          (error) => {
            console.log(error);
          }
        );
      });
    });
  }

  LoadThursday2() {
    this.storage.get("grade").then((g) => {
      this.storage.get("classroom").then((c) => {
        let url =
          "http://localhost/wkapp2/get_thursday2.php?grade=" +
          g +
          "&classroom=" +
          c;

        this.http.get(url).subscribe(
          (data: any) => {
            this.rowsThursday2 = data.rowsThursday2;
            console.log(this.rowsThursday2);
          },
          (error) => {
            console.log(error);
          }
        );
      });
    });
  }
  LoadFriday2() {
    this.storage.get("grade").then((g) => {
      this.storage.get("classroom").then((c) => {
        let url =
          "http://localhost/wkapp2/get_friday2.php?grade=" +
          g +
          "&classroom=" +
          c;

        this.http.get(url).subscribe(
          (data: any) => {
            this.rowsFriday2 = data.rowsFriday2;
            console.log(this.rowsFriday2);
          },
          (error) => {
            console.log(error);
          }
        );
      });
    });
  }
} //end
