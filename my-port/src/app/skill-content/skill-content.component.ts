import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-content',
  templateUrl: './skill-content.component.html',
  styleUrls: ['./skill-content.component.scss']
})
export class SkillContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onButtonCLick()
  {
    console.log("Button pressed")
  }
}
