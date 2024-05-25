import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClasesComponent } from './list-clases.component';

describe('ListClasesComponent', () => {
  let component: ListClasesComponent;
  let fixture: ComponentFixture<ListClasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListClasesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListClasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
