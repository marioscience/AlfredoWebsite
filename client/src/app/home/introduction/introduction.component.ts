import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Introduction} from "../../models/introduction.model";

@Component({
  selector: "introduction-section",
  templateUrl: "./introduction.component.html",
  styleUrls: ["./introduction.component.scss"]

})
export class IntroductionComponent implements OnInit {
  introduction = new Introduction();

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      const introductionIndex = 0;
      this.introduction = <Introduction>data.resolved[introductionIndex];
    });

  }

}
