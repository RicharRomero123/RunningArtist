import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOffersComponent } from './table-offers.component';

describe('TableOffersComponent', () => {
  let component: TableOffersComponent;
  let fixture: ComponentFixture<TableOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
