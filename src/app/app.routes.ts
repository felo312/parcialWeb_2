import { Routes } from '@angular/router';
import { CrearEntidadComponent } from './components/crear-entidad/crear-entidad.component';
import { ListarEntidadesComponent } from './components/listar-entidades/listar-entidades.component';

export const routes: Routes = [
  { path: 'crear', component: CrearEntidadComponent },
  { path: 'listar', component: ListarEntidadesComponent },
  { path: '', redirectTo: 'crear', pathMatch: 'full' }
];
