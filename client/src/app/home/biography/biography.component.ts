import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Biography} from "../../models/biography.model";

@Component({
  selector: "biography-section",
  templateUrl: "./biography.component.html",
  styleUrls: ["./biography.component.scss"]
})
export class BiographyComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
  }

  biography = new Biography();

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      const biographyIndex = 3;
      this.biography = <Biography>data.resolved[biographyIndex];
    });
  }
}
