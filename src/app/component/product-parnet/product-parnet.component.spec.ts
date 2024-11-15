import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductParnetComponent } from './product-parnet.component';

describe('ProductParnetComponent', () => {
  let component: ProductParnetComponent;
  let fixture: ComponentFixture<ProductParnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductParnetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductParnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
