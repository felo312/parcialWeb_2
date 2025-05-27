import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Entidad } from '../../models/entidad.model';
import { Contrato } from '../../models/contrato.model';
import { EntidadService } from '../../services/entidad.service';


@Component({
  standalone: true,
  selector: 'app-crear-entidad',
  templateUrl: './crear-entidad.component.html',
  imports: [CommonModule, FormsModule]
})
export class CrearEntidadComponent {
  entidad: Entidad = {
    nit: '',
    nombre: '',
    contratos: []
  };

  contratoActual: Contrato = {
    valor: 0,
    nombreContratista: '',
    documentoContratista: '',
    nombreContratante: '',
    documentoContratante: '',
    fechaInicio: '',
    fechaFinal: ''
  };

  constructor(private entidadService: EntidadService) {}

  agregarContrato() {
    this.entidad.contratos.push({ ...this.contratoActual });
    this.contratoActual = {
      valor: 0,
      nombreContratista: '',
      documentoContratista: '',
      nombreContratante: '',
      documentoContratante: '',
      fechaInicio: '',
      fechaFinal: ''
    };
  }

  guardarEntidad() {
    this.entidadService.crear(this.entidad).subscribe({
      next: () => {
        alert('Entidad guardada exitosamente');
        this.entidad = { nit: '', nombre: '', contratos: [] };
      },
      error: () => {
        alert('Error al guardar la entidad');
      }
    });
  }
}
