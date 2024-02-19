import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionMiniComponent } from './champion-mini.component';

describe('ChampionMiniComponent', () => {
  let component: ChampionMiniComponent;
  let fixture: ComponentFixture<ChampionMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampionMiniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChampionMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
