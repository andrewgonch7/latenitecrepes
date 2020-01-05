import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityPageComponent } from './quantity-page.component';

describe('QuantityPageComponent', () => {
  let component: QuantityPageComponent;
  let fixture: ComponentFixture<QuantityPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantityPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
