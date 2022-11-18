import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesRestaurentComponent } from './updates-restaurent.component';

describe('UpdatesRestaurentComponent', () => {
  let component: UpdatesRestaurentComponent;
  let fixture: ComponentFixture<UpdatesRestaurentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatesRestaurentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatesRestaurentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
