import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarImportacaoComponent } from './listar-importacao.component';

describe('ListarImportacaoComponent', () => {
  let component: ListarImportacaoComponent;
  let fixture: ComponentFixture<ListarImportacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarImportacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarImportacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
