import { EnumStatus } from "../enum/EnumStatus";

export interface Catalogo {
  id_dentista: number;
  id_tratamiento: number;
  precio: number;
  status: EnumStatus;
}
