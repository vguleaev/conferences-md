import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerComponent implements OnInit {
  @Output() public addEvent = new EventEmitter<void>();
  @Output() public clickContactUs = new EventEmitter<void>();

  constructor() {}

  public ngOnInit() {}

  public onAddEvent() {
    this.addEvent.emit();
  }

  public onContactUsClick() {
    this.clickContactUs.emit();
  }
}
