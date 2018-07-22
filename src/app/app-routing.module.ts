import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
//  Routes, es una interfaz que obliga a definir un array como veos seguidamente
const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  // Carga lazy
  { path: "tareas", loadChildren: "./tareas/tareas.module#TareasModule" },
  { path: "libros", loadChildren: "./libros/libros.module#LibrosModule" },
  {
    path: "contactos",
    loadChildren: "./contactos/contactos.module#ContactosModule"
  },
  //  Para redireccionar por defecto a una ruta cuando no es ningulna de las incluidas en el array
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "**", pathMatch: "full", redirectTo: "Home" } // Para errores en el path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //  importamos y configuramos RouteModule con las rutas indidcadas en la constante routes
  exports: [RouterModule]
})
export class AppRoutingModule {}
