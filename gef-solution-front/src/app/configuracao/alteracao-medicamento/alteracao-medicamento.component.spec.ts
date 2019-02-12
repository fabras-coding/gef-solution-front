import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteracaoMedicamentoComponent } from './alteracao-medicamento.component';

describe('AlteracaoMedicamentoComponent', () => {
  let component: AlteracaoMedicamentoComponent;
  let fixture: ComponentFixture<AlteracaoMedicamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlteracaoMedicamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlteracaoMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
