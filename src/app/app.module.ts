import { AdminmenuPage } from './../pages/adminmenu/adminmenu';
import { AboutPage } from './../pages/about/about';
import { ThappPage } from "./../pages/thapp/thapp";
import { MessagePage } from "./../pages/message/message";
import { StugpaPage } from "./../pages/stugpa/stugpa";
import { UpdateinfoschoolPage } from "./../pages/updateinfoschool/updateinfoschool";
import { AddinfoschoolPage } from "./../pages/addinfoschool/addinfoschool";

import { UpdateschedulePage } from "./../pages/updateschedule/updateschedule";

import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { IonicStorageModule } from "@ionic/storage";
import { HttpClientModule } from "@angular/common/http";
import { LaunchNavigator } from "@ionic-native/launch-navigator";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";


import { StudentPage } from "./../pages/student/student";

import { TeachermenuPage } from "./../pages/teachermenu/teachermenu";

//----------
import { PublicizePage } from "./../pages/publicize/publicize";
import { NewsreleasePage } from "./../pages/newsrelease/newsrelease";
import { AddpublicizePage } from "./../pages/addpublicize/addpublicize";
import { UpdatenewsPage } from "./../pages/updatenews/updatenews";

//---------
import { ActivitynewsPage } from "./../pages/activitynews/activitynews";
import { ThactivitynewsPage } from "./../pages/thactivitynews/thactivitynews";
import { AddactivitynewsPage } from "./../pages/addactivitynews/addactivitynews";
import { UpdateactivityPage } from "./../pages/updateactivity/updateactivity";

//--------
import { UpdatecalendarPage } from "./../pages/updatecalendar/updatecalendar";
import { AddcalendarPage } from "./../pages/addcalendar/addcalendar";
import { ThcalendarPage } from "./../pages/thcalendar/thcalendar";

//---------

import { AddplanPage } from "./../pages/addplan/addplan";

//-------
import { IndexPage } from "./../pages/index/index";
import { ContactPage } from "../pages/contact/contact";
import { SearchPage } from "../pages/search/search";
import { TabsPage } from "../pages/tabs/tabs";
//-------

import { ShowstudyplanonePage } from "./../pages/showstudyplanone/showstudyplanone";
import { StudentinformationPage } from "../pages/studentinformation/studentinformation";
import { GpaPage } from "./../pages/gpa/gpa";
import { GradePage } from "./../pages/grade/grade";
import { GradetwoPage } from "./../pages/gradetwo/gradetwo";
import { SelectgradePage } from "./../pages/selectgrade/selectgrade";
import { CalendarPage } from "../pages/calendar/calendar";
import { InfoschoolPage } from "./../pages/infoschool/infoschool";
import { StugradePage } from "./../pages/stugrade/stugrade";
import { StuthemePage } from "./../pages/stutheme/stutheme";
import { ThthemePage } from "./../pages/ththeme/ththeme";
import { ThschedulePage } from "./../pages/thschedule/thschedule";
import { StuschedulePage } from "./../pages/stuschedule/stuschedule";
//------

import { ThmonFriPage } from "../pages/thmon-fri/thmon-fri";
import { ViewgradePage } from "../pages/viewgrade/viewgrade";
import { UpdateGradePage } from "../pages/update-grade/update-grade";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    
    PublicizePage,
    AddpublicizePage,
    NewsreleasePage,
    CalendarPage,
    StudentPage,
    TeachermenuPage,
    StudentinformationPage,
    GpaPage,
    GradePage,
    GradetwoPage,
    SelectgradePage,
    UpdatenewsPage,
    ActivitynewsPage,
    ThactivitynewsPage,
    AddactivitynewsPage,
    UpdateactivityPage,
    ThcalendarPage,
    AddcalendarPage,
    UpdatecalendarPage,
    StugradePage,
    AddplanPage,
    IndexPage,
    ContactPage,
    SearchPage,
    TabsPage,
    ShowstudyplanonePage,
    InfoschoolPage,
    StuthemePage,
    ThthemePage,
    ThschedulePage,
    StuschedulePage,
    MessagePage,
    ThmonFriPage,
    UpdateschedulePage,
    AddinfoschoolPage,
    UpdateinfoschoolPage,
    StugpaPage,
    ViewgradePage,
    ThappPage,
    UpdateGradePage,
    AboutPage,
    AdminmenuPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
   
    PublicizePage,
    AddpublicizePage,
    NewsreleasePage,
    CalendarPage,
    StudentPage,
    TeachermenuPage,
    StudentinformationPage,
    GpaPage,
    GradePage,
    GradetwoPage,
    SelectgradePage,
    UpdatenewsPage,
    ActivitynewsPage,
    ThactivitynewsPage,
    AddactivitynewsPage,
    UpdateactivityPage,
    ThcalendarPage,
    AddcalendarPage,
    UpdatecalendarPage,
    StugradePage,
    AddplanPage,
    IndexPage,
    ContactPage,
    SearchPage,
    TabsPage,
    ShowstudyplanonePage,
    InfoschoolPage,
    StuthemePage,
    ThthemePage,
    ThschedulePage,
    StuschedulePage,
    MessagePage,
    ThmonFriPage,
    UpdateschedulePage,
    AddinfoschoolPage,
    UpdateinfoschoolPage,
    StugpaPage,
    ViewgradePage,
    ThappPage,
    UpdateGradePage,
    AboutPage,
    AdminmenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    LaunchNavigator,
  ],
})
export class AppModule {}
