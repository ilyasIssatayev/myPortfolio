import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IlyasContentComponent } from './ilyas-content.component';

describe('IlyasContentComponent', () => {
  let component: IlyasContentComponent;
  let fixture: ComponentFixture<IlyasContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlyasContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlyasContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
