import {Component} from "@angular/core";

@Component({
  selector: "register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent {
  register(username, email, password, passwordMatch): void {
    console.log(username, email, password, passwordMatch);
  }
}
