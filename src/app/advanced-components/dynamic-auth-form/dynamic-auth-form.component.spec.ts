import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicAuthFormComponent } from './dynamic-auth-form.component';

describe('DynamicAuthFormComponent', () => {
  let component: DynamicAuthFormComponent;
  let fixture: ComponentFixture<DynamicAuthFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicAuthFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicAuthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
