import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuroSolicitudesComponent } from './muro-solicitudes.component';

describe('MuroSolicitudesComponent', () => {
  let component: MuroSolicitudesComponent;
  let fixture: ComponentFixture<MuroSolicitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuroSolicitudesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuroSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
