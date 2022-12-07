import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasBarComponent } from './citas-bar.component';

describe('CitasBarComponent', () => {
  let component: CitasBarComponent;
  let fixture: ComponentFixture<CitasBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitasBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitasBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
