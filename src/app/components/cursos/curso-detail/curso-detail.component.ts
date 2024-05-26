import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ICurso } from '../models';

@Component({
  selector: 'app-curso-detail',
  templateUrl: './curso-detail.component.html',
  styleUrl: './curso-detail.component.scss'
})
export class CursoDetailComponent {
  cursoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<CursoDetailComponent>,
    @Inject(MAT_DIALOG_DATA) private editCurso?: ICurso
  ) {
    this.cursoForm = this.formBuilder.group({
      nombre: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$'),
          Validators.maxLength(50),
          Validators.minLength(2),
        ],
      ],
      cantHs: [
        '',
        [Validators.required],
      ],
      cantClases: [
        '',
        [
          Validators.required,
        ],
      ],
      tutor: ['', [Validators.required]],
    });

    if (editCurso) {
      this.cursoForm.patchValue(editCurso);
    }
  }

  get nombreControl() {
    return this.cursoForm.get('nombre');
  }

  get cantHsControl() {
    return this.cursoForm.get('cantHs');
  }

  get cantClasesControl() {
    return this.cursoForm.get('cantClases');
  }

  get tutorControl() {
    return this.cursoForm.get('tutor');
  }

  save(): void {
    if (this.cursoForm.invalid) {
      this.cursoForm.markAllAsTouched();
    } else {
      this.matDialogRef.close(this.cursoForm.value);
    }
  }
}
