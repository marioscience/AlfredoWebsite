import {Component, OnInit} from "@angular/core";
import {Biography} from "../../models/biography.model";
import {BiographyService} from "../../services/biography.service";

@Component({
  selector: "biography-section",
  template: `
    <h1> This is the biography. put something here come on man</h1>
    <div>
      <p>Hello! {{ biography.biographyText }}</p>
      <p>Pic: {{ biography.picUrl }}</p>
      <div *ngFor="let gearHeading of biography.gear">
        <h3>{{ gearHeading.gearType }}</h3>
        <ul>
          <li *ngFor="let gear of gearHeading.items">{{ gear.name }}</li>
        </ul>
      </div>
    </div>
  `
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
