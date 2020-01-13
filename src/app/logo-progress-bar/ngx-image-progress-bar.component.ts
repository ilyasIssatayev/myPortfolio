import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-progress-bar',
  templateUrl: './ngx-image-progress-bar.component.html',
  styleUrls: ['./ngx-image-progress-bar.component.scss']
})
export class NgxImageProgressBarComponent implements OnInit {
  @Input() src: string;
  @Input() progress: number;
  @Input() backgroundBlur = false;
  @Input() intensity = false;
  @Input() alt = '';

  constructor() { }

  ngOnInit() {
  }

}
