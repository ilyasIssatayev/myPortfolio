import { Component, OnInit, Input } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
    console.log("IMG1: ",this.img1_src);
  }


}
