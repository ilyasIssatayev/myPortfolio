import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-game-content',
  templateUrl: './game-content.component.html',
  styleUrls: ['./game-content.component.scss'],

})
export class GameContentComponent implements OnInit {
  @Input() name="Default Name";
  @Input() descr="Default main Text";
  @Input() img1_src="Default topic"
  @Input() img2_src="Default topic"
  @Input() img3_src="Default topic"
  @Input() video_src="Default topic"
  constructor(private sanitizer:DomSanitizer) {    }

  ngOnInit() {

  }

  getlink(): SafeUrl {
    const output=this.sanitizer.bypassSecurityTrustUrl(this.video_src);
    console.log(output);
    return output;
}
}
