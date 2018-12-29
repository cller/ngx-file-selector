import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFileSelectorComponent } from './ngx-file-selector.component';

describe('FileSelectorComponent', () => {
  let component: NgxFileSelectorComponent;
  let fixture: ComponentFixture<NgxFileSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxFileSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFileSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
