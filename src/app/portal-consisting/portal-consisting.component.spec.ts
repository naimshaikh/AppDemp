import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalConsistingComponent } from './portal-consisting.component';

describe('PortalConsistingComponent', () => {
  let component: PortalConsistingComponent;
  let fixture: ComponentFixture<PortalConsistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalConsistingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalConsistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
