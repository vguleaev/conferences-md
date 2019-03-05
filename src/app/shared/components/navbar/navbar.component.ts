import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  @Output() public clickProjectMission = new EventEmitter<void>();

  constructor() {}

  public ngOnInit() {}

  public onClickProjectMission() {
    this.clickProjectMission.emit();
  }
}
