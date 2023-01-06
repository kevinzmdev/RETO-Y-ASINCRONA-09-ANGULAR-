import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Reto9Component } from './reto9/reto9.component';
import { Tarea9Component } from './tarea9/tarea9.component';



@NgModule({
  declarations: [
    Reto9Component,
    Tarea9Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    Reto9Component,
    Tarea9Component
  ]
})
export class Pagina1Module { }
