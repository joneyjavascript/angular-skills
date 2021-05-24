import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingComponent } from 'src/app/components/loading/loading.component';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BrowserModule, BrowserAnimationsModule, FlexLayoutModule, MatIconModule, MatCardModule, HttpClientModule, MatTooltipModule ],
      declarations: [ CardComponent, LoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.card = { name: "Skill Test", likes: 1 }
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('card with more than 5 likes use especific css class', () => {
    const cardElement: HTMLElement = fixture.nativeElement;
    component.card = { name: "Skill Test", likes: 5 };
    fixture.detectChanges();
    expect(cardElement.querySelector('.like-button').classList.contains('likes-5')).toBeTruthy();
  });

  it('card with more than 10 likes use especific css class', () => {
    const cardElement: HTMLElement = fixture.nativeElement;
    component.card = { name: "Skill Test", likes: 11 };
    fixture.detectChanges();
    expect(cardElement.querySelector('.like-button').classList.contains('likes-10')).toBeTruthy();
  });
});
