import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchBioComponent } from './research-bio.component';

describe('ResearchBioComponent', () => {
  let component: ResearchBioComponent;
  let fixture: ComponentFixture<ResearchBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
