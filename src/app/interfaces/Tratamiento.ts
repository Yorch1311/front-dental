import { EnumStatus } from "../enum/EnumStatus";

export interface Tratamiento {
  id: number;
  nombre: string;
  descripcion: string;
  status: EnumStatus;
}
