import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConactFormComponent } from './conact-form.component';

describe('ConactFormComponent', () => {
  let component: ConactFormComponent;
  let fixture: ComponentFixture<ConactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
