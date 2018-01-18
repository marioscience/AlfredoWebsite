import {Component} from "@angular/core";
import {Introduction} from "../../models/introduction.model";
import {IntroductionService} from "../../services/introduction.service";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: "introduction-edit",
  templateUrl: "./introduction-edit.component.html"
})
export class IntroductionEditComponent {
  introduction = new Introduction();

  constructor(private introductionService: IntroductionService, private snackBar: MatSnackBar) {
    this.introductionService.getIntroduction()
      .then((data) => {
        this.introduction = data;
      });
  }

  cancel() {
    this.introductionService.getIntroduction()
      .then((data) => {
        this.introduction = data;
        this.snackBar.open("Action cancelled. Changes reverted.", "", {
          duration: 2000
        });
      });
  }

  save() {
    this.introductionService.updateIntroduction(this.introduction)
      .then(newIntroduction => {
        this.introduction = newIntroduction;
        this.snackBar.open("Introduction Updated Successfully.", "", {
          duration: 2000
        })
      });
  }


}
