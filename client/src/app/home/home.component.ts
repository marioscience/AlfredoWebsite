import {Component} from "@angular/core";


@Component({
  selector: "home",
  template: `
    <introduction-section></introduction-section>
    <music-section></music-section>
    <biography-section></biography-section>
    <transcription-section></transcription-section>
  `
})
export class HomeComponent {

}
