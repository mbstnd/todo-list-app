import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TareasService } from 'src/app/services/tareas.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonList, IonItem, IonLabel, IonInput, IonTextarea, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg } from '@ionic/angular/standalone';
import { TakePhotoService } from 'src/app/services/take-photo.service';



interface Task {
  title: string;
  description: string;
}

@Component({
  selector: 'app-agregar-tareas',
  templateUrl: './agregar-tareas.page.html',
  styleUrls: ['./agregar-tareas.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonList, IonItem, IonLabel, IonInput, IonTextarea, IonCard, IonCardHeader, IonCardTitle, IonCardContent, CommonModule, FormsModule, IonImg]
})
export class AgregarTareasPage {
  // Datos del formulario
  taskTitle: string = '';
  taskDescription: string = '';
  photo: string | null = null;
  location: { latitude: number; longitude: number } | null = null;
  address: string | null = null;

  constructor(private tareasService: TareasService, private router: Router, private takePhotoService: TakePhotoService) {}

  // Enviar el formulario de creación de tarea
  onSubmit(form: any) {
    if (form.invalid) {
      return;
    }


    const newTask: Task = {
      title: this.taskTitle,
      description: this.taskDescription,
    };

    // Usar el servicio para agregar la tarea
    this.tareasService.agregarTarea(newTask).subscribe({
      next: (response) => {
        console.log('Tarea agregada:', response);
        // Navegar a la lista de tareas después de agregarla
        this.router.navigate(['/listar-tareas']);
      },
      error: (error) => {
        console.error('Error al agregar tarea:', error);
      },
      complete: () => {
        console.log('Operación de agregar tarea completada');
      }
    });
  }

  async capturePhoto(){
    const result = await this.takePhotoService.takePhoto();
    console.log('Foto y ubicacion',result)
    if(result){
      this.photo = result.photo;
      this.location = result.location;
      this.address = result.address;
    }
  }
}

