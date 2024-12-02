import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Task {
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  private apiUrl = 'https://6744f769b4e2e04abea43e96.mockapi.io/tarea/todo';

  constructor(private http: HttpClient) {}


  getTareas(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }


  agregarTarea(tarea: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, tarea);
  }
}
