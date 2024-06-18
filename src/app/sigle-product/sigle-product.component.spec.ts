import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigleProductComponent } from './sigle-product.component';

describe('SigleProductComponent', () => {
  let component: SigleProductComponent;
  let fixture: ComponentFixture<SigleProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigleProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
