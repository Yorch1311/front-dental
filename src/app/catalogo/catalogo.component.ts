import { Component, OnInit } from '@angular/core';
import { EnumStatus } from '../enum/EnumStatus';
import { Catalogo } from '../interfaces/Catalogo';
import { Tratamiento } from '../interfaces/Tratamiento';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  constructor() { }

  tratamientos: Tratamiento[] = [
    {
      id: 1,
      nombre: "Limpieza",
      descripcion: "",
      status: EnumStatus.Activo
    },
    {
      id: 2,
      nombre: "Limpieza 2",
      descripcion: "",
      status: EnumStatus.Activo
    },
    {
      id: 3,
      nombre: "Limpieza 3",
      descripcion: "",
      status: EnumStatus.Activo
    },
    {
      id: 4,
      nombre: "Limpieza 4",
      descripcion: "",
      status: EnumStatus.Activo
    }
  ];

  catalogo: Catalogo[] = [];

  ngOnInit(): void {
  }

  addTratamiento(tratamiento: string, precio: string) {
    this.catalogo.push({
      id_dentista: 1,
      id_tratamiento: parseInt(tratamiento),
      precio: parseFloat(precio),
      status: EnumStatus.Activo
    });
  }
}
