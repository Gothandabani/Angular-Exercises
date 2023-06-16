import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryboxComponent } from './gallerybox.component';

describe('GalleryboxComponent', () => {
  let component: GalleryboxComponent;
  let fixture: ComponentFixture<GalleryboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryboxComponent]
    });
    fixture = TestBed.createComponent(GalleryboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
