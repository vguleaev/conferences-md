import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-bubbles',
  templateUrl: './bubbles.component.html',
  styleUrls: ['./bubbles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BubblesComponent implements OnInit {
  constructor() {}

  public ngOnInit() {}
}
