import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEntidadesComponent } from './listar-entidades.component';

describe('ListarEntidadesComponent', () => {
  let component: ListarEntidadesComponent;
  let fixture: ComponentFixture<ListarEntidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarEntidadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarEntidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
