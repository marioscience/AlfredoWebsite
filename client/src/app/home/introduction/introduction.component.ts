import {Component, OnInit} from "@angular/core";
import {IntroductionService} from "../../services/introduction.service";
import {Introduction} from "../../models/introduction.model";

@Component({
  selector: "introduction-section",
  templateUrl: "./introduction.component.html",
  styleUrls: ["./introduction.component.scss"]

})
export class IntroductionComponent implements OnInit {
  introduction = new Introduction();

  constructor(private introductionService: IntroductionService) {
  }

  ngOnInit(): void {
    this.introductionService.getIntroduction()
      .then(introduction => this.introduction = introduction);
  }

}
