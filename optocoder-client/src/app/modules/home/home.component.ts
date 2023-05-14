import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";


@Component({
  selector: "app-homepage",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {

  userStatusObj: { rowIndex: number; Status: number; showModal: string } = {
    rowIndex: -1,
    Status: -1,
    showModal: "",
  };
  constructor(
    private title:Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Home |Rahi Monitoring Admin Panel')
    //this.getSummery();
  }
  // getSummery(){
  //   this.userService.getSummary()
  //   .subscribe((response)=>{
  //     if(response.ResponseCode==ResponseStatus.success){
  //       this.vmDashboard = response.ResponseObj;
  //     }
  //   })
  // }


}
