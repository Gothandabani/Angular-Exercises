import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentboxComponent } from './contentbox.component';

describe('ContentboxComponent', () => {
  let component: ContentboxComponent;
  let fixture: ComponentFixture<ContentboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentboxComponent]
    });
    fixture = TestBed.createComponent(ContentboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
