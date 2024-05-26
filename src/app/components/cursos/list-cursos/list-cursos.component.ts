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
  loading = false;

  displayedColumns: string[] = [
    'id',
    'nombre',
    'cantHs',
    'cantClases',
    'tutor',
    'actions'
  ];

  constructor(private matDialog: MatDialog, private cursosService: CursosService) {}

  ngOnInit(): void {
    this.loading = true;
    this.loadCursos();
  }

  loadCursos() {
    this.cursosService.getCursos().subscribe({
      next: (cursos) => {
        this.cursos = cursos;
      },
      complete: () => {this.loading = false;}
    })
  }

  openDialog(editCuso?: ICurso): void {
    this.matDialog
      .open(CursoDetailComponent, {
        data: editCuso,
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result) {
            if (editCuso) {
              console.log(editCuso)
              this.cursosService.updateCurso(editCuso.id, result).subscribe( (curso) => {
                this.cursosService.getCursos().subscribe( (cursos) => {
                  this.cursos = cursos;
                });
              })
            } else {
              console.log(result)
              result.createdAt = new Date();
              this.cursosService.createCurso(result).subscribe({
                next: (cursoCreado) => {
                  this.cursos = [...this.cursos, cursoCreado];
                },
              })
            }
          }
        },
      });
  }

  onDeleteCurso(id: string): void {
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
          this.cursosService.getCursos().subscribe( (cursos) => {
            this.cursos = cursos
          });
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
