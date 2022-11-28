import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarListComponent } from './topbar-list.component';

describe('TopbarListComponent', () => {
  let component: TopbarListComponent;
  let fixture: ComponentFixture<TopbarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopbarListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopbarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
