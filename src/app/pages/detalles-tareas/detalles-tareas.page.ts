import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-detalles-tareas',
  templateUrl: './detalles-tareas.page.html',
  styleUrls: ['./detalles-tareas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetallesTareasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
