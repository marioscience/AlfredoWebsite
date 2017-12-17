import {Component} from "@angular/core";

@Component({
  selector: "introduction-edit",
  template: `
    <h1>Introduction</h1>
    <mat-input-container>
      <input type="text" matInput placeholder="Title">
    </mat-input-container>
    <mat-input-container>
      <<textarea name="" id="" cols="30" rows="10"></textarea>>
    </mat-input-container>
  `
})
export class IntroductionEditComponent {

}
