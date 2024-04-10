import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  {path: 'productos',component:ListaProductosComponent},
  {path: 'inicio',component:NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
