import { Component, OnInit } from "@angular/core";

@Component({
  selector: "kc-head",
  templateUrl: "./head.component.html",
  styleUrls: ["./head.component.css"]
})
export class HeadComponent implements OnInit {
  title: String;
  secondTitle: String;
  logo: String;
  constructor() {}

  ngOnInit() {
    this.title = "Mi app";
    this.secondTitle = "Mi app2";
    this.logo = "../../../assets/logo_angular.svg";
  }
}
