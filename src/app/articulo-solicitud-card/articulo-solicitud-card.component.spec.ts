import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloSolicitudCardComponent } from './articulo-solicitud-card.component';

describe('ArticuloSolicitudCardComponent', () => {
  let component: ArticuloSolicitudCardComponent;
  let fixture: ComponentFixture<ArticuloSolicitudCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloSolicitudCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticuloSolicitudCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
