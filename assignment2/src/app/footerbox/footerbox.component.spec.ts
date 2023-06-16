import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterboxComponent } from './footerbox.component';

describe('FooterboxComponent', () => {
  let component: FooterboxComponent;
  let fixture: ComponentFixture<FooterboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterboxComponent]
    });
    fixture = TestBed.createComponent(FooterboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
