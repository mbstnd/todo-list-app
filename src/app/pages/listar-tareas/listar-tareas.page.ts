import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TareasService } from 'src/app/services/tareas.service';
import { Router } from '@angular/router';

import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';

@Component({
  selector: 'app-listar-tareas',
  templateUrl: './listar-tareas.page.html',
  styleUrls: ['./listar-tareas.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule] // Importar módulos necesarios para standalone
})
export class ListarTareasPage implements OnInit {
  tareas: { title: string; description: string }[] = [];


  constructor( private tareasService: TareasService, private router: Router ) {
    addIcons({ add })
  }

  ngOnInit() {
    this.tareasService.getTareas().subscribe({
      next: (data) => (this.tareas = data),
      error: (err) => console.error('Error al obtener tareas:', err)
    });
  }

  goToCreate(){
    this.router.navigate(['/agregar-tareas']);
  }
}

