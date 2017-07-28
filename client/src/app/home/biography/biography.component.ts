import {Component, OnInit} from "@angular/core";
import {Biography} from "../../models/biography.model";
import {BiographyService} from "../../services/biography.service";

import {SectionScrollService} from "../../framework/sectionscroll/section-scroll.service";

@Component({
  selector: "biography-section",
  templateUrl: "./biography.component.html",
  styleUrls: ["./biography.component.scss"]
})
export class BiographyComponent implements OnInit {
  constructor(private biographyService: BiographyService,
              private scrollService: SectionScrollService) {
  }

  biography = new Biography();

  ngOnInit(): void {
    this.scrollService.setServicesPending(true);
    this.biographyService.getBiography()
      .then((biography) => {
        this.biography = biography;
        this.scrollService.setServicesPending(false);
      });
  }
}
