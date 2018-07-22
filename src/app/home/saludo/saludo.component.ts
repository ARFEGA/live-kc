import { Component, OnInit } from "@angular/core";

@Component({
  selector: "kc-saludo",
  templateUrl: "./saludo.component.html",
  styleUrls: ["./saludo.component.css"]
})
export class SaludoComponent implements OnInit {
  usuario: String;
  constructor() {}

  ngOnInit() {
    this.usuario = "Armando";
  }

  public btnBorrar(ev) {
    console.log(ev);
  }
}
