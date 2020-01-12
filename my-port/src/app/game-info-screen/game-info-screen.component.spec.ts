import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameInfoScreenComponent } from './game-info-screen.component';

describe('GameInfoScreenComponent', () => {
  let component: GameInfoScreenComponent;
  let fixture: ComponentFixture<GameInfoScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameInfoScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameInfoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
