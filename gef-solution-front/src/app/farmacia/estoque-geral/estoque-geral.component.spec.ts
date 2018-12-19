import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueGeralComponent } from './estoque-geral.component';

describe('EstoqueGeralComponent', () => {
  let component: EstoqueGeralComponent;
  let fixture: ComponentFixture<EstoqueGeralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstoqueGeralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstoqueGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
