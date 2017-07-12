import {Component} from "@angular/core";
import {Introduction} from "../../models/introduction.model";
import {IntroductionService} from "../../services/introduction.service";
import {OnInit} from "@angular/core";

@Component({
  selector: "introduction-section",
  //language=Angular2HTML
  template: `
    <h1> This is the home section. put something here come on man</h1>
    Intro: {{ introduction }}
  `
})
export class IntroductionComponent implements OnInit {
  introduction: Introduction;

  constructor(private introductionService: IntroductionService) {
  }

  ngOnInit(): void {
    this.introductionService.getIntroduction()
      .then(introduction => {
        this.introduction = introduction
      });
  }

}
