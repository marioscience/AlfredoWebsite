import {Component, OnInit} from "@angular/core";
import {Biography} from "../../models/biography.model";
import {BiographyService} from "../../services/biography.service";

@Component({
  selector: "biography-section",
  templateUrl: "./biography.component.html",
  styleUrls: ["./biography.component.scss"]
})
export class BiographyComponent implements OnInit {
  constructor(private biographyService: BiographyService) {
  }

  biography = new Biography();

  ngOnInit(): void {
    this.biographyService.getBiography()
      .then(biography => this.biography = biography);
  }
}
