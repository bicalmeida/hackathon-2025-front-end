import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulacaoEmprestimoComponent } from './simulacao-emprestimo';

describe('SimulacaoEmprestimo', () => {
  let component: SimulacaoEmprestimoComponent;
  let fixture: ComponentFixture<SimulacaoEmprestimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimulacaoEmprestimoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulacaoEmprestimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
