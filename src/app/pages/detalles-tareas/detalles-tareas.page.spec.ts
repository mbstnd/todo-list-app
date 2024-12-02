import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallesTareasPage } from './detalles-tareas.page';

describe('DetallesTareasPage', () => {
  let component: DetallesTareasPage;
  let fixture: ComponentFixture<DetallesTareasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesTareasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
