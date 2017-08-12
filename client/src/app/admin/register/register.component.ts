import {Component} from "@angular/core";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: "register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent {
  constructor(private authService: AuthService) {
  }

  registerUser(username, email, password, passwordMatch): void {
    this.authService.register(username, email, password, passwordMatch);
  }
}
