import { Component, OnInit, Input } from "@angular/core";
import { MappingsContext } from "source-list-map";
import * as textPng from 'text2png-rotate'
@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  @Input() isCustom=false;
  @Input() title="Default Title";
  @Input() mainText="Default main Text";
  @Input() topic="Default topic"
  constructor() {}

  ngOnInit() {

  }

  downloadFile(){
    let link = document.createElement("a");
    link.download = "ilyas_cv.pdf";
    link.href = "../../assets/ilyas_cv.pdf";
    link.click();
}
}
