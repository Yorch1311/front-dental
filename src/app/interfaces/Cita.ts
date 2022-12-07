import { EnumEstadoCita } from "../enum/EnumEstadoCita";
import { EnumStatus } from "../enum/EnumStatus";

export interface Cita {
  id: number;
  id_dentista: number;
  id_cliente: number;
  fecha_cita: Date;
  fecha_creacion: Date;
  precio: number;
  estado: EnumEstadoCita;
  status: EnumStatus;
}
