import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneroLiterario } from './genero-literario';

describe('GeneroLiterario', () => {
  let component: GeneroLiterario;
  let fixture: ComponentFixture<GeneroLiterario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneroLiterario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneroLiterario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
