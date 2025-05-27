import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Entidad } from '../../models/entidad.model';
import { EntidadService } from '../../services/entidad.service';

@Component({
  standalone: true,
  selector: 'app-listar-entidades',
  templateUrl: './listar-entidades.component.html',
  imports: [CommonModule]
})
export class ListarEntidadesComponent implements OnInit {
  entidades: Entidad[] = [];

  constructor(private entidadService: EntidadService) {}

  ngOnInit(): void {
    this.entidadService.listar().subscribe({
      next: (data: Entidad[]) => {
        this.entidades = data;
      },
      error: () => {
        alert('Error al cargar entidades');
      }
    });
  }
}
