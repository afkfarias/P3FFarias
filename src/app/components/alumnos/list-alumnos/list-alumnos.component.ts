import { Component, OnInit } from '@angular/core';
import { IAlumno } from '../models';
import { AlumnoDetailComponent } from '../alumno-detail/alumno-detail.component';

import { MatDialog } from '@angular/material/dialog';
import { AlumnosService } from '../../../core/alumnos/alumnos.service';
import { isNgTemplate } from '@angular/compiler';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-alumnos',
  templateUrl: './list-alumnos.component.html',
  styleUrl: './list-alumnos.component.scss'
})
export class ListAlumnosComponent implements OnInit{
  //idNewAlumno = 4;
  alumnos: IAlumno[] = [];

  displayedColumns: string[] = [
    'id',
    'firstName',
    'email',
    'gender',
    'perfil',
    'actions',
  ];

  constructor(private matDialog: MatDialog, private alumnosService: AlumnosService) {}

  ngOnInit(): void {
    this.loadAlumnos();
  }

  loadAlumnos() {
    this.alumnosService.getAlumnos().subscribe({
      next: (alumnos) => {
        this.alumnos = alumnos;
      }
    })
  }

  openDialog(editAlumno?: IAlumno): void {
    this.matDialog
      .open(AlumnoDetailComponent, {
        data: editAlumno,
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result) {
            if (editAlumno) {
              console.log(editAlumno)
              this.alumnosService.updateAlumnos(editAlumno.id, result).subscribe( (alumno) => {
                this.alumnosService.getAlumnos().subscribe( (alumnos) => {
                  this.alumnos = alumnos;
                });
              })
            } else {
              console.log(result)
              result.createdAt = new Date();
              this.alumnosService.createAlumnos(result).subscribe({
                next: (alumnoCreado) => {
                  this.alumnos = [...this.alumnos, alumnoCreado];
                },
              })
            }
          }
        },
      });
  }

  onDeleteUser(id: string): void {
    Swal.fire({
      title: "Esta seguro de eliminar el alumno?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aceptar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.alumnosService.deleteAlumnos(id).subscribe((alumno) => {
          this.alumnosService.getAlumnos().subscribe( (alumnos) => {
            this.alumnos = alumnos
          });
          Swal.fire({
          title: "Eliminado!",
          text: "El alumno ha sido eliminado.",
          icon: "success"
          });
        })
      }
    });
  }
}
