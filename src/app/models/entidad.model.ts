import { Contrato } from './contrato.model';

export interface Entidad {
  id?: number;
  nit: string;
  nombre: string;
  contratos: Contrato[];
}
