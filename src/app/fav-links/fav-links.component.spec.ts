import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavLinksComponent } from './fav-links.component';

describe('FavLinksComponent', () => {
  let component: FavLinksComponent;
  let fixture: ComponentFixture<FavLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavLinksComponent]
    });
    fixture = TestBed.createComponent(FavLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
