import { Component, OnInit } from '@angular/core';
import { EnumEstadoCita } from 'src/app/enum/EnumEstadoCita';
import { EnumStatus } from 'src/app/enum/EnumStatus';
import { ViewCita } from 'src/app/interfaces/ViewCita';

@Component({
  selector: 'app-citas-bar',
  templateUrl: './citas-bar.component.html',
  styleUrls: ['./citas-bar.component.css']
})
export class CitasBarComponent implements OnInit {

  constructor() { }

  citas: ViewCita[] = [{
    id: 1,
    cliente: "Jorge Campos",
    fecha: new Date().toTimeString(),
  },{
    id: 2,
    cliente: "Jorge Luis Campos",
    fecha: new Date().toTimeString(),
  }];

  ngOnInit(): void {
  }

}
