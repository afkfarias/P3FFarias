import { Component } from '@angular/core';
import { ICurso } from '../models';
import { MatDialog } from '@angular/material/dialog';
import { CursosService } from '../../../core/cursos/cursos.service';
import { CursoDetailComponent } from '../curso-detail/curso-detail.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-cursos',
  templateUrl: './list-cursos.component.html',
  styleUrl: './list-cursos.component.scss'
})
export class ListCursosComponent {
  idNewAlumno = 4;
  cursos: ICurso[] = [];

  displayedColumns: string[] = [
    'id',
    'nombre',
    'tutor'
  ];

  constructor(private matDialog: MatDialog, private cursosService: CursosService) {}

  ngOnInit(): void {
    this.loadCursos();
  }

  loadCursos() {
    this.cursosService.getCursos().subscribe({
      next: (cursos) => {
        this.cursos = cursos;
      }
    })
  }

  openDialog(editAlumno?: ICurso): void {
    this.matDialog
      .open(CursoDetailComponent, {
        data: editAlumno,
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result) {
            if (editAlumno) {
              console.log(editAlumno)
              this.cursos = this.cursos.map((u) =>
                u.id === editAlumno.id ? { ...u, ...result } : u
              );
            } else {
              console.log(result)
              result.id = this.idNewAlumno;
              this.idNewAlumno++;
              result.createdAt = new Date();
              this.cursos = [...this.cursos, result];
            }
          }
        },
      });
  }

  onDeleteCurso(id: number): void {
    Swal.fire({
      title: "Esta seguro de eliminar el curso?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aceptar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.cursosService.deleteCurso(id).subscribe((cursos) => {
          this.cursos = cursos,
          Swal.fire({
          title: "Eliminado!",
          text: "El curso ha sido eliminado.",
          icon: "success"
          });
        })
      }
    });
  }
}
