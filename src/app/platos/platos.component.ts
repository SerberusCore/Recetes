import { Component, OnInit } from '@angular/core';
import recetas from "../recetas.json";

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.styl']
})
export class PlatosComponent implements OnInit {
 recetas=recetas; 
  constructor() { }

  ngOnInit(): void {
  }

}
