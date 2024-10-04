import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFirstLastComponent } from './table-first-last.component';

describe('TableFirstLastComponent', () => {
  let component: TableFirstLastComponent;
  let fixture: ComponentFixture<TableFirstLastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableFirstLastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableFirstLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
