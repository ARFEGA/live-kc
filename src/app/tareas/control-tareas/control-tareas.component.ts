import { Component, OnInit } from "@angular/core";

@Component({
  selector: "kc-control-tareas",
  templateUrl: "./control-tareas.component.html",
  styleUrls: ["./control-tareas.component.css"]
})
export class ControlTareasComponent implements OnInit {
  aTareas: Array<string>;
  constructor() {}

  ngOnInit() {
    this.aTareas = []; //Inicializamos el array
  }

  addTarea(tarea) {
    this.aTareas.push(tarea);
    console.dir(this.aTareas);
  }

  deleteTarea(i) {
    this.aTareas.splice(i, 1);
  }
}
