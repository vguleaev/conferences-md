import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { AngularMaterialModule } from 'src/app/shared/modules/angular-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CalendarComponent } from './../../components/calendar/calendar.component';
import { BubblesComponent } from './../../components/bubbles/bubbles.component';
import { BannerComponent } from './../../components/banner/banner.component';
import { EventsService } from 'src/app/core/services/events.service';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeComponent, BannerComponent, CalendarComponent, BubblesComponent],
      imports: [MaterialModule, AngularMaterialModule, SharedModule],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
