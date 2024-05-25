import { Component } from '@angular/core';
import { IClase } from '../models';
import { ClasesService } from '../../../core/clases/clases.service';
import { MatDialog } from '@angular/material/dialog';
import { ClaseDetailComponent } from '../clase-detail/clase-detail.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-clases',
  templateUrl: './list-clases.component.html',
  styleUrl: './list-clases.component.scss'
})
export class ListClasesComponent {
  idNewAlumno = 4;
  clases: IClase[] = [];

  displayedColumns: string[] = [
    'id',
    'name',
    'date',
    'actions'
  ];

  constructor(private matDialog: MatDialog, private clasesService: ClasesService) {}

  ngOnInit(): void {
    this.loadClases();
  }

  loadClases() {
    this.clasesService.getClases().subscribe({
      next: (clases) => {
        this.clases = clases;
      }
    })
  }

  openDialog(editAlumno?: IClase): void {
    this.matDialog
      .open(ClaseDetailComponent, {
        data: editAlumno,
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result) {
            if (editAlumno) {
              console.log(editAlumno)
              this.clases = this.clases.map((u) =>
                u.id === editAlumno.id ? { ...u, ...result } : u
              );
            } else {
              console.log(result)
              result.id = this.idNewAlumno;
              this.idNewAlumno++;
              result.createdAt = new Date();
              this.clases = [...this.clases, result];
            }
          }
        },
      });
  }

  onDeleteClase(id: number): void {
    Swal.fire({
      title: "Esta seguro de eliminar la clase?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aceptar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.clasesService.deleteClase(id).subscribe((clases) => {
          this.clases = clases,
          Swal.fire({
          title: "Eliminado!",
          text: "La clase ha sido eliminada.",
          icon: "success"
          });
        })
      }
    });
  }
}
