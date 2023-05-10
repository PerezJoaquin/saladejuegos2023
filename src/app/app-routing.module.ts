import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { RegistroComponent } from './componentes/registro/registro.component';

const routes: Routes = [
  {path: "home", component:HomeComponent},
  {path: "login", component:LoginComponent},
  {path: "quienSoy", component:QuienSoyComponent},
  {path: "registro", component:RegistroComponent},
  {path: "**", component:HomeComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),CommonModule,
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
