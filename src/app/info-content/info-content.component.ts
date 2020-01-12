import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-info-content",
  templateUrl: "./info-content.component.html",
  styleUrls: ["./info-content.component.scss"]
})
export class InfoContentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  downloadFile(){
    let link = document.createElement("a");
    link.download = "ilyas_cv.pdf";
    link.href = "../../assets/ilyas_cv.pdf";
    link.click();
}
}
