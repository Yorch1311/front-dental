import { Component, OnInit } from '@angular/core';
import { EnumEstadoCita } from '../enum/EnumEstadoCita';
import { EnumStatus } from '../enum/EnumStatus';
import { Cita } from '../interfaces/Cita';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  tipo: string = "text";
  placeholder: string = "Carlos Soto";
  citas: Cita[] = [
    {
      id: 1,
      id_dentista: 1,
      id_cliente: 1,
      fecha_cita: new Date(),
      fecha_creacion: new Date(),
      precio: 1,
      estado: EnumEstadoCita.Pendiente,
      status: EnumStatus.Activo,
    },
    {
      id: 2,
      id_dentista: 1,
      id_cliente: 1,
      fecha_cita: new Date(),
      fecha_creacion: new Date(),
      precio: 1,
      estado: EnumEstadoCita.Pendiente,
      status: EnumStatus.Activo,
    },
    {
      id: 3,
      id_dentista: 1,
      id_cliente: 1,
      fecha_cita: new Date(),
      fecha_creacion: new Date(),
      precio: 1,
      estado: EnumEstadoCita.Pendiente,
      status: EnumStatus.Activo,
    },
    {
      id: 4,
      id_dentista: 1,
      id_cliente: 1,
      fecha_cita: new Date(),
      fecha_creacion: new Date(),
      precio: 1,
      estado: EnumEstadoCita.Pendiente,
      status: EnumStatus.Activo,
    },
    {
      id: 5,
      id_dentista: 1,
      id_cliente: 1,
      fecha_cita: new Date(),
      fecha_creacion: new Date(),
      precio: 1,
      estado: EnumEstadoCita.Pendiente,
      status: EnumStatus.Activo,
    }
  ];

  ngOnInit(): void {
  }

  selectChanged(valor: string){
    console.log(valor);
    switch(valor){
      case "1":
        this.tipo = "text";
        this.placeholder = "Carlos Soto";
        break;
      case "2":
        this.tipo = "date";
        this.placeholder = "12/12/2022";
        break;
    }
  }

}
